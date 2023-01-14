import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer,filter,map } from 'rxjs';
import { PersonService } from 'src/core/services/person/person.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { environment } from 'src/environments/environment';

import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';



@Component({
  selector: 'app-sanitary-permit-form-new',
  templateUrl: './sanitary-permit-form-new.component.html',
  styleUrls: ['./sanitary-permit-form-new.component.scss']
})
export class SanitaryPermitFormNewComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  addURL = "/main/health/sanitary-permit/add-form"
  listURL = "/main/health/sanitary-permit"
  form_code = 'sp';
  zip_code : any;
  basepath = "sanitary-permit-form-print";
  basepath_arr : any;
  checked = true;
  generateGuId : any;
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
  transactionId : any;
  buttonTitle: any;
  imageUrl: string = "assets/img/MunicipalLogo.png";

  validateForm!: FormGroup;
  date = null;
  listOfMedExam: any= [];
  listOfData_trans : any = [];
  businessData : any = [];
  datas : any = [];

  nzValue = 'A';

  file_name: any;
  base_64: any;
  info_file: any;
  sub: any;
  SERVER_ADDRESS: string = environment.apiUrl;
  currentUser: any[] = [];
  userValue: any;

  isEdit: boolean = false

  radioValue :any ;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private healthService : HealthCardService,
    private pathservice : PathsegmentService,
    private SPServices : SanitaryPermitService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.transactionId = params['transId'];
    });


   }

   ngOnInit() {
    this.isLoading = true;
      //  CHECK IF FOR ADD NEW OR FOR EDIT
    this.procs(this.transactionId)
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    this.basepath_arr = this.pathservice.getPath();
    this.validateForm = this.fb.group({
      form_trans_no: '',
      sp_transaction_date : '',
      sp_transaction_type : 'sanitary permit',
      sp_transaction_status :'0',
      sp_transaction_total_fee : 100 ,
      sp_department_head :this.userValue.userName_User,
      sp_payment_id : [''],
      payment : [''],
      sp_payment_status : [''],
      sp_or_pkid : [''],
      sp_or_id : [''],
      sp_person_id : [''],
      sp_business_id : [''],
      sp_person_fullname : [''],
      sp_reg_no : [''],
      sp_reg_date : [''],
      sp_line_of_bsn : ['',[Validators.required]],
      sp_tin_no : ['',[Validators.required]],
      sp_ctc_no : ['',[Validators.required]],
      sp_pin_no : ['',[Validators.required]],
      sp_business_area : ['',[Validators.required]],
      sp_tel_no : [''],
      sp_mobile_no :  [null, [Validators.required]],
      sp_email_add :  [''],
      sp_business_type : ['',[Validators.required]],
      sp_business_type_other :[''],
      sp_inspector : ['',[Validators.required]],
      phoneNumberPrefix: ['+63']
    });


  }

  wccFormFunc(){

  }
  procs(idata : any){
    if(idata !=null){
      this.isEdit = true
      this.getBusinessData();
      this.getTransactionForEdit();
    }else{
      this.isEdit = false;
      console.log(this.param);

        this.getBusinessData();

    }
  }
  owner : any;
  business_name : any;
  trade_name : any;
  type_of_business : any;
  business_address : any;
  owner_id : any;
  reg_no : any;
  reg_date : any;
  getBusinessData(){
    this.isLoading = true;
    this.SPServices.getBusinessData(this.param).subscribe({
      next : data => {
        this.businessData = data;
        // this.owner = this.businessData?.owner_name;
        // this.owner_id = this.businessData[0].owner_id
        // this.business_name = this.businessData[0].business_name
        // this.trade_name = this.businessData[0].trade_name
        // this.type_of_business = this.businessData[0].entity
        // this.business_address = this.businessData[0].building+", "+this.businessData[0].street+", "+this.businessData[0].brgy_name
        this.reg_no = '0001-';
        this.reg_date = new Date;
        this.isLoading = false;
        this.validateForm.patchValue({
          sp_transaction_date : new Date,
          sp_person_id : this.businessData?.owner_id,
          sp_person_fullname : this.businessData?.owner_name,
          sp_business_id : this.param,
          sp_reg_no : this.reg_no,
          sp_reg_date : this.reg_date,
          payment : 0,
          sp_payment_status : 0
        })
       // console.log("THIS IS THE DATA",data)
       this.getInspector();
      },
      error : data => {
        console.log("ERROR", data);
      },
      complete : () => {
        this.isLoading = false;
      }
    })
  }

  getTransactionForEdit(){
    this.isEdit = true;

    this.SPServices.getData(this.transactionId).subscribe(tdata =>{
      const dtl = tdata[0]
      this.radioValue = dtl.sp_business_type
      //this.checkradioValue(dtl.sp_business_type)
      //this.otherType(dtl.sp_business_type, dtl.sp_business_type_other);
      //console.log("omsim",dtl)
        this.validateForm.patchValue({
          form_trans_no :dtl.form_trans_no,
          sp_line_of_bsn : dtl.sp_line_of_bsn,
          sp_tin_no : dtl.sp_tin_no,
          sp_ctc_no : dtl.sp_ctc_no,
          sp_pin_no : dtl.sp_pin_no,
          sp_business_area : dtl.sp_business_area,
          sp_tel_no : dtl.sp_tel_no,
          sp_mobile_no : dtl.sp_mobile_no,
          sp_email_add : dtl.sp_email_add,
          sp_business_type : dtl.sp_business_type,
          sp_business_type_other : dtl.sp_business_type_other,
          sp_inspector : dtl.sp_inspector
        });
    });
    this.isLoading = false;
  }
  inspectorList : any;
  getInspector(){
   this.SPServices.getInspectorList().subscribe(insData => {
    this.inspectorList = insData;
    console.log("Inspector", this.inspectorList);
   });
  }
val : any

otherType(value : any , otherValue : any){
  console.log(value)
  this.radioValue = value
  if(value){
    this.validateForm.patchValue({
      sp_business_type : value,
      sp_business_type_other : otherValue
    })
  }else{
    this.validateForm.patchValue({
      sp_business_type : value,
      sp_business_type_other : ' '
    })
  }
}
checkradioValue(radioValue :any){
  if (radioValue != 'OTHERS') {
    this.validateForm.patchValue({
      sp_business_type : radioValue,
      sp_business_type_other : 'none'
    })
  }
}

 cancel(): void {
    if(this.isEdit){
      this.router.navigate(['/main/health/sanitary-permit'])
    }else{
      this.router.navigate(['/main/health/sanitary-permit/add-form'])
    }
  }
  showConfirm(value : any
): void {
this.modal.confirm({
nzTitle: '<i>Do you Want to proceed?</i>',
nzContent: "",
nzOnOk: () =>{
  value.sp_reg_no = value.sp_reg_no.toString()
  value.sp_tin_no = value.sp_tin_no.toString()
  value.sp_ctc_no = value.sp_ctc_no.toString()
  value.sp_pin_no = value.sp_pin_no.toString()
  value.sp_tel_no = value.sp_tel_no.toString()
  value.sp_mobile_no = value.sp_mobile_no.toString()
  console.log(value)
this.submitForm(value)

}
});
}
  submitForm(value : any): void {

    if (this.isEdit) {
      console.log(value);
      if(value.sp_business_type != 'OTHERS') value.sp_business_type_other = 'none';

      console.log('aafter',value);
      this.SPServices.updateTransaction(this.transactionId, value).subscribe(data =>{
        this.isLoading =false;
          if (data) {
            this.saveLoading = false;
            this.backRoute()
            this.notification.create(
              "success",
              'Successfully Updated',
              'Record Updated successfully.'
            );

          } else {
            this.isLoading =false;
            this.saveLoading = false;
            this.notification.create(
              "error",
              'Unsuccessfully Updated',
              'Record Updated unsuccessfully.',
            );this.saveLoading = false;
          }
      })
    } else {
      console.log(value)
      this.SPServices.saveNewTransaction(value).subscribe(data =>{

        this.isLoading =false;
        if (data) {
          this.saveLoading = false;
          this.backRoute()
          this.notification.create(
            "success",
            'Successfully Added',
            'New Record has successfully saved.'
          );

        } else {
          this.isLoading =false;
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Added',
            'New Record unsuccessfully saved.',
          );this.saveLoading = false;
        }

      });
    }
  }
  backRoute(){
    if (this.isEdit) {
      this.router.navigate([this.listURL])
    } else {
      this.router.navigate([this.addURL]);
    }
  }
  proccedToPrintForm( data_id : any) {

    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.basepath+"/"+data_id]);
  }
  checkVal(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.validateForm.controls[ev_].value;
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


  requestorArr() : FormArray{
    return this.validateForm.get("hc_requestor") as FormArray
  }



}


