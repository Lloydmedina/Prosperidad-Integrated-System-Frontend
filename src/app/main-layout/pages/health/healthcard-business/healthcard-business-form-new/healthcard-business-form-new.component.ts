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
import { ThisReceiver } from '@angular/compiler';
import * as moment from 'moment'
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { BusinessService } from 'src/core/services/business/business.service';
import { BusinessBrowseComponent } from 'src/app/main-layout/template/business-browse/business-browse.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';

@Component({
  selector: 'app-healthcard-business-form-new',
  templateUrl: './healthcard-business-form-new.component.html',
  styleUrls: ['./healthcard-business-form-new.component.scss']
})
export class HealthcardBusinessFormNewComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  addURL = "/main/health/healthcard-business/add-form"
  exam_code = 'hc';
  zip_code : any;
  basepath = "healthcard-business-form-print";
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
  buttonTitle: any;
  imageUrl: string = "assets/img/MunicipalLogo.png";

  validateForm!: FormGroup;
  date = null;
  listOfMedExam: any= [];
  listOfData_trans : any = [];
  businessData : any = [];
  datas : any = [];


  file_name: any;
  base_64: any;
  info_file: any;
  sub: any;
  SERVER_ADDRESS: string = environment.apiUrl;
  currentUser: any[] = [];
  userValue: any;
  pk_id : any;
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
    private SPServices : SanitaryPermitService,
    private HCBusinessServices : BusinessService,
    private drawerService: NzDrawerService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['busId'];
      this.pk_id = params['id'];
    });


   }

   ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
     //  CHECK IF FOR ADD NEW OR FOR EDIT
    if(this.pk_id !=null){
      this.isEdit = true
      this.getBusinessData();
      this.loadTransactionForEdit();
    }else{
      this.isEdit = false;
      if (this.param) {
        this.isLoading = false;
        this.buttonTitle = "Save & Exit"
        this.getBusinessData();
      } else {
        this.buttonTitle = "Save & Exit"
      }
    }
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    this.basepath_arr = this.pathservice.getPath();
    this.loadMedExam();
    this.validateForm = this.fb.group({
      transaction_date : new Date,
      transaction_type : [''],
      transaction_status :[''],
      business_id: [''],
      person_id : [''],
      brgy_id : [''],
      brgy_name : [''],
      civil_status : [''],
      remarks :[''],
      amount_paid : [''],
      payment_fee : [''],
      or_id : [''],
      payment_status : [''],
      requestor_id : [''],
      transaction_log : [''],
      department_head : this.userValue.userName_User,
      mayor :[' '],
      med_exam_id : [' ',[Validators.required]],
      examiner_name : [' ',[Validators.required]],
      examination_date : [null,[Validators.required]],
      examination_address : [' ',[Validators.required]],
      examination_finding : [' ',[Validators.required]],
      examination_cause : [' '],
      //REQUESTOR INFO ------------------------
      hc_requestor : this.fb.group({
            agree :true,
            requestor_name : [' '],
            remarks : [' '],
            requestor_id : [' '],
            status :[' '],
        }),
      hc_form_trans_data_arr: this.fb.array([])
    });

  }
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
    // console.log("THIS IS THE DATA",data)
     this.loadPerson(this.businessData.owner_id);
      this.validateForm.patchValue({
        transaction_type : 'Healthcard-Business',
        transaction_status :'0',
        business_id: this.param,
        person_id :this.owner_id,
        amount_paid : 0,
        payment_fee : '100',
        payment_status : '0',
        department_head : [''],
        mayor :[' '],
        hc_requestor:{
          requestor_name : this.owner,
          remarks : this.validateForm.value.remarks,
          requestor_id : this.owner_id,
          status : 'active',
        }
      })
      this.isLoading = false
      this.checkExamArray();
    })
  }
  loadTransactionForEdit(){
    this.healthService.getHealthCardTransactionList(this.pk_id).subscribe(data => {
      const dtl = data
      //console.log(dtl)
      dtl.forEach((data:any) => {
        this.medExamArray().push(
          this.fb.group({
            lab_exam_id : data.lab_exam_id,
            examiner_name : data.examiner_name ,
            lab_exam_date : data.lab_exam_date,
            lab_exam_place : data.lab_exam_place,
            lab_exam_result : data.lab_exam_result,
            status: `1`,
            lab_exam_cause : data.lab_exam_cause
          })
        )

      });
    })
  }
  isEdit: boolean = false
 cancel(): void {
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]])
  }
showConfirm(value : any
): void {
this.submitForm(value);
}
  submitForm(value : any): void {
    console.log(value);
    if(this.isEdit){
      this.healthService.updateDtl(this.pk_id, value.hc_form_trans_data_arr).subscribe( data=> {
        this.isLoading =false;
        if (data) {
          this.saveLoading = false;
          this.backRoute()
          this.notification.create(
            "success",
            'Successfully Added',
            'New Health-Card has successfully saved.'
          );

        } else {
          this.isLoading =false;
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Added',
            'New Health-Card unsuccessfully saved.',
          );this.saveLoading = false;
        }

      });


    }else{

      if (this.medExamArray().length != 0) {
          this.healthService.saveNewTransaction(value).subscribe( data=> {
            this.isLoading =false;
            if (data) {
              this.saveLoading = false;
              this.backRoute()
              this.notification.create(
                "success",
                'Successfully Added',
                'New Health-Card has successfully saved.'
              );

            } else {
              this.isLoading =false;
              this.saveLoading = false;
              this.notification.create(
                "error",
                'Unsuccessfully Added',
                'New Health-Card unsuccessfully saved.',
              );this.saveLoading = false;
            }

          });
      }else {
        this.isLoading =false;
          this.notification.create(
            "error",
            'Please Add Medical examination',
            'unsuccessfully Saved.'
          );this.saveLoading = false;
        }
      }
  }
  backRoute(){
    if(this.isEdit){
      this.router.navigate(['/main/health/healthcard-business'])
    }else{
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

  loadMedExam(){
    this.healthService.getMed_ExamList(this.exam_code).subscribe(data => {
      this.listOfMedExam = data;
    });
  }
  addNewExamRecored(e? : MouseEvent) : void{
    var med_exam_id = this.validateForm.value.med_exam_id = Number(this.validateForm.value.med_exam_id);

    this.medExamArray().push(this.medExamFields(this.validateForm.value))
    //console.log(this.medExamArray().controls)
    this.checkExamArray();
    this.clearFields();
  }
  saveBtn : any;
  checkExamArray(){
    if(this.medExamArray().length !=0){
      this.saveBtn = false;
    }else{
      this.saveBtn = true;
    }
  }
  clearFields(){
    this.validateForm.patchValue({
      med_exam_id :' ',
      examiner_name :' ',
      examination_date : ' ',
      examination_address : ' ',
      examination_finding : ' ',
      examination_cause : ' ',
    })
  }

  medExamFields(data :any): FormGroup{
    return this.fb.group({
      lab_exam_id : data.med_exam_id,
      examiner_name : data.examiner_name ,
      lab_exam_date : data.examination_date,
      lab_exam_place : data.examination_address,
      lab_exam_result : data.examination_finding,
      status: `1`,
      lab_exam_cause : data.examination_cause
    })
  }

  medExamArray() : FormArray {
    return this.validateForm.get("hc_form_trans_data_arr") as FormArray
  }

  delete_exam(i : any, en : any){
    i.preventDefault()
    this.medExamArray().removeAt(en)
    this.checkExamArray();
  }

  //show person list-----------
  p_name : any;
  p_address : any;
  p_bdate : any;
  p_bplace : any;
  p_cs : any;
  p_ctzn : any;
  p_gender : any;
  p_prof : any;
  p_religion : any;
  p_btn = "Search Person";
  p_btn_icon = 'search';
  p_stats = false;
  p_data : any;
  p_id : any;
  loadPerson(personid : any){
    this.personService.getPersonGUID(personid).subscribe(data => {

      console.log("this person",data);
        this.p_data = data[0];
        this.p_stats = true;
        this.p_btn = "Change";
        this.p_btn_icon = 'edit';

        this.p_name = this.p_data.first_name+" "+this.p_data.middle_name+" "+this.p_data.last_name+" "+this.p_data.suffix;
        this.p_address = this.p_data.street+", "+this.p_data.brgy_name+", "+this.p_data.city_mun_name+", "+this.p_data.province_name;
        this.p_bdate = this.p_data.birth_date;
        this.p_bplace = this.p_data.place_of_birth;
        this.p_cs = this.p_data.civil_status_name;
        this.p_ctzn = this.p_data.citizenship;
        this.p_gender = this.p_data.gender_name;
        this.p_prof = this.p_data.profession;
        this.p_religion = this.p_data.religion
        this.p_id = this.p_data.person_guid

        this.validateForm.patchValue({
          person_id :this.p_data.person_guid,
          brgy_id : this.p_data.brgy_id,
          brgy_name : this.p_data.brgy_name,
          civil_status : this.p_data.civil_status_name,
          requestor_id : this.p_data.person_id,
          department_head : '',
          mayor :' ',
          hc_requestor:{
            requestor_name : this.p_name,
            remarks : this.validateForm.value.remarks,
            requestor_id : this.p_id,
            status : 'active',
          }
        })
    })
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
    	console.log('this----',data)
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
      this.validateForm.patchValue({
        person_id :data.person_guid,
        brgy_id : data.barangay_id,
        brgy_name : data.brgy_name,
        civil_status : data.civil_status_name,
        requestor_id : data.person_id,
        department_head : '',
        mayor :' ',
        hc_requestor:{
          requestor_name : this.p_name,
          remarks : this.validateForm.value.remarks,
          requestor_id :data.person_guid,
          status : 'active',
        }
      })
    });
  }

  addRequestor(value: any, e? : MouseEvent) : void{
    if (value == true) {
      this.checked = true
      this.validateForm.patchValue({
        hc_requestor:{
          requestor_name : this.p_name,
          remarks : this.validateForm.value.remarks,
          requestor_id : this.param,
          status : 'active',
        }
      })
    } else {
      this.checked = false
      this.validateForm.patchValue({
        hc_requestor:{
          requestor_name : '',
          remarks : '',
          requestor_id : this.param,
          status : '',
        }
      })
    }
    var med_requestor_ = this.param = Number(this.param);
    // console.log(med_requestor_)
  }

  requestorArr() : FormArray{
    return this.validateForm.get("hc_requestor") as FormArray
  }
  requestorFields( data : any) : FormGroup{
    return this.fb.group({
      pk_id : "",
      requestor_id : this.param,
      requestor_name : this.p_name,
      status : "1",
      remarks : data.remarks,
    })
  }
}


