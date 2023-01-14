import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { WaterPotabilityService } from 'src/core/services/health/water-potability/water-potability.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-water-potability-form-new',
  templateUrl: './water-potability-form-new.component.html',
  styleUrls: ['./water-potability-form-new.component.scss']
})
export class WaterPotabilityFormNewComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  listUrl = "/main/health/water-potability"
  addUrl = "/main/health/water-potability/add-form"
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


  wpForm!: FormGroup;
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
  p_btn = "Search Person";
  p_btn_icon = 'search';
  currentUser: any[] = [];
  userValue: any;
  transactionId : any;
  isEdit : boolean = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private pathservice : PathsegmentService,
    private wpServices : WaterPotabilityService,
    private drawerService: NzDrawerService,
    private personService: PersonService,
    private SPServices: SanitaryPermitService,


  ) {
    this.route.params.subscribe(params => {
      this.param = params['businessId'];
      this.transactionId = params['tId'];
    });


   }

   ngOnInit() {
     this.processChecker();
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;

    this.basepath_arr = this.pathservice.getPath();
    this.wpForm = this.fb.group({
      form_trans_no:[''],
      wp_transaction_date: new Date,
      wp_transaction_type : [' '],
      wp_transaction_status: [' '],
      wp_transaction_total_fee : [' '],
      wp_department_head : [' '],
      wp_payment_status : [' '],
      wp_business_id : [' '],
      wp_person_id : [' '],
      wp_person_fullname : [' '],
      wp_source_loc : ['', [Validators.required]],
      wp_source_type:  ['', [Validators.required]],
      wp_inspector_id : ['', [Validators.required]],
      wp_remarks : [' '],
      wp_or_id : [''],
      wp_or_pkid : ['']
    });


  }
  processChecker(){
    if(this.transactionId){

      this.isEdit = true
      this.loadTransactioForEdit();
      this.buttonTitle = "Update & Exit"
    }else{
      this.getBusinessData();
      this.buttonTitle = "Save & Exit"
    }
  }
  businessData : any = [];
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
  radioValue = 'Surface Water';
  owner : any;
  business_name : any;
  trade_name : any;
  type_of_business : any;
  business_address : any;
  owner_id : any;
  getBusinessData(){
    this.SPServices.getBusinessData(this.param).subscribe(data =>{

      this.businessData = data;
      this.owner = this.businessData.owner_name;
      this.owner_id = this.businessData.owner_id
      this.business_name = this.businessData.business_name
      this.trade_name = this.businessData.trade_name
      this.type_of_business = this.businessData.entity
      this.business_address = this.businessData.building+", "+this.businessData.street+", "+this.businessData.brgy_name
      this.loadPerson(this.businessData.owner_id);
      this.isLoading = false
      this.wpForm.patchValue({

        wp_transaction_type : 'Water Potability',
        wp_transaction_status: '0',
        wp_transaction_total_fee : '500',
        wp_department_head : this.userValue.userName_User,
        wp_payment_status : '0',
        wp_business_id : this.param,
        wp_person_id : this.owner_id,
        wp_person_fullname : this.owner,
      })
    })
  }
  p_name : any;
  p_address : any;
  p_bdate : any;
  p_bplace : any;
  p_cs : any;
  p_age : any;
  p_ctzn : any;
  p_gender : any;
  p_prof : any;
  p_religion : any;
  p_stats = false;
  p_data : any;
  p_id : any;
  p_contact : any;
  loadPerson(personid : any){
    this.personService.getPersonGUID(personid).subscribe(data => {

        this.p_data = data[0];
        this.p_stats = true;
        this.p_btn = "Change";
        this.p_btn_icon = 'edit';

        this.p_name = this.p_data.first_name+" "+this.p_data.middle_name+" "+this.p_data.last_name+" "+this.p_data.suffix;
        this.p_address = this.p_data.street+", "+this.p_data.brgy_name+", "+this.p_data.city_mun_name+", "+this.p_data.province_name;
        this.p_bdate = this.p_data.birth_date;
        this.p_bplace = this.p_data.place_of_birth;
        this.p_age = this.p_data.age;
        this.p_cs = this.p_data.civil_status_name;
        this.p_ctzn = this.p_data.citizenship;
        this.p_gender = this.p_data.gender_name;
        this.p_prof = this.p_data.profession;
        this.p_religion = this.p_data.religion
        this.p_id = this.p_data.person_guid
        this.p_contact = this.p_data.phone_no
        this.wpForm.patchValue({
          wp_person_id : this.p_id,
          wp_person_fullname : this.p_name,
        })
        this.getInspector();
    })
  }
  transDatas : any;
  loadTransactioForEdit(){
  this.wpServices.getData(this.transactionId).subscribe(tdata =>{

    this.transDatas = tdata[0];
    this.businessData = tdata[0].wp_business_data;
    this.owner = this.businessData.owner_name;
    this.owner_id = this.businessData.owner_id
    this.business_name = this.businessData.business_name
    this.trade_name = this.businessData.trade_name
    this.type_of_business = this.businessData.entity
    this.business_address = this.businessData.building+", "+this.businessData.street+", "+this.businessData.brgy_name
    this.loadPerson(this.businessData.owner_id);
    this.isLoading = false
    this.wpForm.patchValue({
      form_trans_no : this.transDatas.form_trans_no,
      wp_transaction_type : 'Water Potability',
      wp_transaction_status: '1',
      wp_transaction_total_fee : '500',
      wp_department_head : this.userValue.userName_User,
      wp_payment_status : '0',
      wp_business_id : this.param,
      wp_person_id : this.owner_id,
      wp_person_fullname : this.owner,
      wp_inspector_id : this.transDatas.wp_inspector_id,
      wp_source_loc : this.transDatas.wp_source_loc,
      wp_source_type : this.transDatas.wp_source_type,
    })
  })
  }
  inspectorList : any;
  getInspector(){
   this.SPServices.getInspectorList().subscribe(insData => {
    this.inspectorList = insData;

   });
  }
  showPersonList(e? : MouseEvent) :void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Person List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {

      }
    });
    drawerRef.afterClose.subscribe(data => {
      this.p_stats = true;
      this.p_btn = "Change";
      this.p_btn_icon = 'edit';

      this.p_name = data.first_name+" "+data.middle_name+" "+data.last_name+" "+data.suffix;
      this.p_address = data.street == null ? data.street+", "+data.brgy_name+", "+data.city_mun_name+", "+data.province_name : data.brgy_name+", "+data.city_mun_name+", "+data.province_name;
      this.p_bdate = data.birth_date;
      this.p_bplace = data.place_of_birth;
      this.p_cs = data.civil_status_name;
      this.p_ctzn = data.citizenship;
      this.p_gender = data.gender_name;
      this.p_prof = data.profession;
      this.p_religion = data.religion
      this.p_id = data.person_guid
      this.p_age = data.age;
      this.p_contact = data.phone_no
      this.wpForm.patchValue({
        wp_person_id : this.p_id,
        wp_person_fullname : this.p_name,
      })
    });
  }

 cancel(): void {
    this.router.navigate(['/main/health/water-potability/add-form'])
  }
  showConfirm(value:any): void {

    this.submitForm(value)

}
submitForm(value:any): void {
  if (this.isEdit) {

    this.modal.confirm({
      nzTitle: 'Do you really want to Update this record?',
      nzOnOk: () => {
        this.wpServices.updateTransaction(this.transactionId, value).subscribe(async (data: any) => {


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
  } else {
    this.modal.confirm({
      nzTitle: 'Do you really want to Save this record?',
      nzOnOk: () => {
        this.wpServices.saveNewTransaction(value).subscribe(async (data: any) => {


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
    this.router.navigate([this.listUrl]);
  } else {
    this.router.navigate([this.addUrl]);
  }
}
  checkVal(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.wpForm.controls[ev_].value;
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


