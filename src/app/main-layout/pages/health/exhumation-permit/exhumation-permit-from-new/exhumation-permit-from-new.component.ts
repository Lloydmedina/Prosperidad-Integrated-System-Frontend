import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ExhumationPermitService } from 'src/core/services/health/exhumation-permit/exhumation-permit.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exhumation-permit-from-new',
  templateUrl: './exhumation-permit-from-new.component.html',
  styleUrls: ['./exhumation-permit-from-new.component.scss']
})
export class ExhumationPermitFromNewComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  listURL = "/main/health/exhumation-permit";
  addURL = "/main/health/exhumation-permit/add-form"
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

  currentUser: any[] = [];
  userValue: any;
  transactionId : any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private pathservice : PathsegmentService,
    private exPermitServices : ExhumationPermitService

  ) {
    this.route.params.subscribe(params => {
      this.param = params['personId'];
      this.transactionId = params['tId']
    });


   }

   ngOnInit() {
     this.processChecker()
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    console.log('this is the user'+this.userValue)
    this.basepath_arr = this.pathservice.getPath();

    this.expForm = this.fb.group({
      //TRANSACTION DATA --------------
      form_trans_no : [''],
      exp_transaction_date: [' '],
      exp_transaction_type : [' '],
      exp_transaction_status: [' '],
      exp_transaction_total_fee : [' '],
      exp_department_head : [' '],
      exp_payment_id : [' '],
      exp_payment_status : [' '],
      exp_person_id : [' '],
      exp_person_fullname : [' '],
      exp_person_address : [' '],
      exp_cadaver_name : ['', [Validators.required]],
      exp_cadaver_address:  ['', [Validators.required]],
      exp_cadaver_buriedat: ['', [Validators.required]],
      exp_remarks : [' '],
      exp_or_pkid : [' '],
      exp_or_id: [' '],
    });
  }
  processChecker(){
    if (this.transactionId) {
      console.log("Edit")
      this.isLoading = false;
      this.isEdit = true;
      this.buttonTitle = "Update & Exit"
      this.loadTransactionForEdit(this.transactionId)
    } else {
      console.log("New")
      this.isLoading = false;
      this.isEdit = false;
      this.buttonTitle = "Save & Exit"
      this.getPerson(this.param)
    }
  }
  isEdit : boolean = false;
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
  getPerson(person_id : any){
    this.exPermitServices.getPerson(person_id).subscribe(data => {
      this.person_data = data[0];
      this.apl_fullname = this.person_data.last_name+", "+this.person_data.first_name+" "+this.person_data.middle_name+" ";
      this.apl_suffix = this.person_data.suffix;
      this.apl_address = this.person_data.brgy_name+", "+this.person_data.city_mun_name+", "+this.person_data.province_name;
      this.apl_street = this.person_data.street;
      this.apl_bdate = this.person_data.birth_date
      this.apl_gender = this.person_data.gender_name
      this.apl_cs = this.person_data.civil_status_name
      this.apl_age = this.person_data.age
      this.expForm.patchValue({
      exp_transaction_date: new Date,
      exp_transaction_type : "Exhumation_permit",
      exp_transaction_status: "0",
      exp_transaction_total_fee : "100",
      exp_department_head : this.userValue.userName_User,
      exp_payment_status : '0',
      exp_person_id : this.param,
      exp_person_fullname : this.apl_fullname,
      exp_person_address : this.apl_address,
      })
      console.log("THIS IS THE PERSON",this.person_data)
    })

  }
  transData : any;
  loadTransactionForEdit(trans_id : any){
    this.exPermitServices.getData(trans_id).subscribe(tdata =>{
      this.transData = tdata[0][0]
      console.log(this.transData)
      this.expForm.patchValue({
        form_trans_no : this.transData.form_trans_no,
        exp_transaction_date: new Date,
        exp_transaction_type : this.transData.exp_transaction_type,
        exp_transaction_status: this.transData.exp_transaction_status,
        exp_transaction_total_fee : this.transData.exp_transaction_total_fee,
        exp_department_head : this.transData.exp_department_head,
        exp_payment_status : this.transData.exp_payment_status,
        exp_person_id : this.transData.exp_person_id,
        exp_person_fullname : this.transData.exp_person_fullname,
        exp_person_address : this.transData.exp_person_address,
        exp_cadaver_name : this.transData.exp_cadaver_name,
        exp_cadaver_address:  this.transData.exp_cadaver_address,
        exp_cadaver_buriedat: this.transData.exp_cadaver_buriedat,
        exp_remarks : this.transData.exp_remarks,
        exp_or_pkid : this.transData.exp_or_pkid,
        exp_or_id: this.transData.exp_or_id,
      })
      this.getPerson(this.transData.exp_person_id)
    })
  }



  showConfirm(value:any): void {
    this.modal.confirm({
    nzTitle: '<i>Do you Want to proceed?</i>',
    nzContent: "<b>Applicant's Name: "+this.apl_fullname+"</b>",
    nzOnOk: () =>{
    this.submitForm(value)
    }
    });
}
submitForm(value:any): void {

 if (this.isEdit) {
  console.log(value)
  this.modal.confirm({
    nzTitle: 'Do you really want to Update this record?',
    nzOnOk: () => {
      this.exPermitServices.updateTransaction(this.transactionId,value).subscribe(async (data: any) => {
        console.log(data)

        this.backRoute()
        await this.notification.create(
          "success",
          'Successfully Saved',
          'The record has successfully updated.'
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
} else {
  this.modal.confirm({
    nzTitle: 'Do you really want to Save this record?',
    nzOnOk: () => {
      this.exPermitServices.saveNewTransaction(value).subscribe(async (data: any) => {
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
  if (this.isEdit) {
    this.router.navigate([this.listURL]);
  } else {
    this.router.navigate([this.addURL]);
  }
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


