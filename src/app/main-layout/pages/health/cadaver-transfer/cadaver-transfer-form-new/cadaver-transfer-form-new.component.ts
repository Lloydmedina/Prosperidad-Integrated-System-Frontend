import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CadaverTransferService } from 'src/core/services/health/cadaver-transfer/cadaver-transfer.service';
import { ExhumationPermitService } from 'src/core/services/health/exhumation-permit/exhumation-permit.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

import { environment } from 'src/environments/environment';
import { AdminConsoleListModule } from '../../../admin-console/admin-console-list/admin-console-list.module';

@Component({
  selector: 'app-cadaver-transfer-form-new',
  templateUrl: './cadaver-transfer-form-new.component.html',
  styleUrls: ['./cadaver-transfer-form-new.component.scss']
})
export class CadaverTransferFormNewComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  listURL = "/main/health/cadaver-transfer";
  addURL ="/main/health/cadaver-transfer/add-form";
  form_code = 'exp';
  zip_code : any;
  basepath_arr : any;
  checked = true;

  chk_txt = true;
  chk_arr = [1];
  err_res = false;
  hc_requestor : any = [];
  new_person_trans_data :any = [] ;
  err_message = '';
  dateToday = new Date().getFullYear();
  bdate: any;
  loading = false;
  avatarUrl?: string;
  isLoading = true;
  saveLoading = false;
  param: any;
  buttonTitle: any;
  date = new Date;


  expForm!: FormGroup;
  birthdate = null;

  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  listOfMedExam: any= [];
  listOfData_trans : any = [];
  lab_exam_name : any;
  lab_exam_fee : any;
  mc_transaction_total_fee : any;
  file_name: any;
  base_64: any;
  info_file: any;
  sub: any;
  SERVER_ADDRESS: string = environment.apiUrl;

  // FROM PRINT
  name: any;
  occupation: any;
  address : any;
  age : any;
  nationality : any;
  gender : any;
  cs : any;
  transactionId : any;
  currentUser: any[] = [];
  userValue: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private pathservice : PathsegmentService,
    private ctpServices : CadaverTransferService,
    private expServices : ExhumationPermitService,
    private SPServices : SanitaryPermitService

  ) {
    this.route.params.subscribe(params => {
      this.param = params['personId'];
      this.transactionId = params['tId']
    });


   }

   ngOnInit() {
     this.isLoading = true;
    this.processChecker(this.transactionId);
     //this.getExhumatedData(this.param);
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    //console.log('this is the user'+this.userValue)
    this.basepath_arr = this.pathservice.getPath();
   // this.getPerson();
    this.expForm = this.fb.group({
      //PERSON DATA --------------
      form_trans_no : [''],
      ctp_transaction_date: [' '],
      ctp_transaction_type : [' '],
      ctp_transaction_status: [' '],
      ctp_transaction_total_fee : [' '],
      ctp_department_head : [' '],
      ctp_payment_id : [' '],
      ctp_payment_status : [' '],
      ctp_exhumation_id :[''],
      ctp_person_id : [' '],
      ctp_person_fullname : [' '],
      ctp_inspector_id : ['', [Validators.required]],
      ctp_cadaver_name : ['', [Validators.required]],
      ctp_cadaver_curr_loc:  ['', [Validators.required]],
      ctp_cadaver_new_loc: ['', [Validators.required]],
      ctp_remarks : [' '],
      ctp_or_pkid : [' '],
      ctp_or_id: [' '],

    });

  }
  isEdit : boolean = true;
  processChecker(tdata : any){
    if(tdata !=null){
      this.isEdit = true;
      this.isLoading = false;
      this.buttonTitle = "Update & Exit"
      this.loadTransactionForEdit(tdata)
    }else{
      this.isEdit = false;
      this.isLoading = false;
      this.buttonTitle = "Save & Exit"
      this.getExhumatedData(this.param)
    }
  }
  exp_data : any;
  exhumated : boolean = true;
  getExhumatedData(exp_id : any){
    this.expServices.getData(exp_id).subscribe(expData =>{
     // console.log(expData)
      if (expData[0].length == 0) {

        this.getPerson(this.param);
        this.isLoading = false;
        this.exhumated = false;
      } else {
        this.exp_data = expData[0][0]
        this.getPerson(this.exp_data.exp_person_id);
        this.expForm.patchValue({
          ctp_exhumation_id :this.exp_data.exp_pk_id,
          ctp_cadaver_name : this.exp_data.exp_cadaver_name,
          ctp_cadaver_curr_loc:  this.exp_data.exp_cadaver_buriedat,
        })
        this.isLoading = false;
      }
    })
  }
  ctpData : any;
  loadTransactionForEdit(tdata : any){
    this.ctpServices.getData(tdata).subscribe(tdatas =>{
      this.ctpData = tdatas[0]
      console.log("transaction", this.ctpData)
      this.expForm.patchValue({
        form_trans_no : this.ctpData.form_trans_no,
        ctp_exhumation_id :this.ctpData.ctp_exhumation_id,
        ctp_inspector_id : this.ctpData.ctp_inspector_id,
        ctp_cadaver_name : this.ctpData.ctp_cadaver_name,
        ctp_cadaver_curr_loc:  this.ctpData.ctp_cadaver_curr_loc,
        ctp_cadaver_new_loc: this.ctpData.ctp_cadaver_new_loc,
        ctp_remarks : this.ctpData.ctp_remarks,
      })
      this.getPerson(this.ctpData.ctp_person_id);
    })
  }
  person_data : any;
  apl_fullname : any ;
  apl_suffix : any;
  apl_address : any;
  apl_street : any;
  apl_bdate : any;
  apl_age : any;
  apl_gender : any;
  apl_cs : any;
  apl_contact : any;
  getPerson(pdata : any){
    this.ctpServices.getPerson(pdata).subscribe(data => {
      this.person_data = data[0];
    //console.log(this.person_data)
      this.apl_fullname = this.person_data.last_name+", "+this.person_data.first_name+" "+this.person_data.middle_name+" ";
      this.apl_suffix = this.person_data.suffix;
      this.apl_address = this.person_data.brgy_name+", "+this.person_data.city_mun_name+", "+this.person_data.province_name;
      this.apl_street = this.person_data.street;
      this.apl_bdate = this.person_data.birth_date
      this.apl_gender = this.person_data.gender_name
      this.apl_cs = this.person_data.civil_status_name
      this.apl_age = this.person_data.age
      this.expForm.patchValue({
      ctp_transaction_date: new Date,
      ctp_transaction_type : "Cadaver-transfer permit",
      ctp_transaction_status: "0",
      ctp_transaction_total_fee : "100",
      ctp_department_head : this.userValue.userName_User,
      ctp_payment_status : '0',
      ctp_person_id : this.person_data.person_guid,
      ctp_person_fullname : this.apl_fullname,

      })
     // console.log("THIS IS THE PERSON",data)
     this.getInspector();
    })

  }
  inspectorList : any;
  getInspector(){
   this.SPServices.getInspectorList().subscribe(insData => {
    this.inspectorList = insData;
    console.log("Inspector", this.inspectorList);
   });
  }

 cancel(): void {
    if(this.isEdit){
      this.router.navigate([this.listURL])
    }else{
      this.router.navigate([this.addURL])
    }
  }
  showConfirm(value:any): void {
    this.submitForm(value)

}
submitForm(value:any): void {
 if(this.isEdit){
  console.log(value)
  this.modal.confirm({
    nzTitle: 'Do you really want to Update this record?',
    nzOnOk: () => {
      this.ctpServices.updateTransaction(this.transactionId,value).subscribe(async (data: any) => {
        console.log(data)

        this.backRoute()
        await this.notification.create(
          "success",
          'Successfully Updated',
          'Record Updated successfully.'
        );
      },
      async error => {
       await this.notification.create(
          "error",
          'Unsuccessfully Updated',
          'Record Updated Unsuccessfully.'
        );
      });
    }
  })
 }else{
  this.modal.confirm({
    nzTitle: 'Do you really want to Save this record?',
    nzOnOk: () => {
      this.ctpServices.saveNewTransaction(value).subscribe(async (data: any) => {
        console.log(data)

        this.backRoute()
        await this.notification.create(
          "success",
          'Successfully Saved',
          'New Record has successfully saved.'
        );
      },
      async error => {
       await this.notification.create(
          "error",
          'Unsuccessfully Saved',
          'New Record has not been saved.'
        );
      });
    }
  })
 }
}
backRoute(){
  this.router.navigate([this.listURL]);
}
  checkVal(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.expForm.controls[ev_].value;
    if (a == null) {
     this.chk_txt = true;

    } else {
      if (this.chk_arr.length > 3) {
        this.chk_txt = false;
      } else {
        this.chk_arr.push(1);
      }
    }
  }


}


