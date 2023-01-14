import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DentalCertificateService } from 'src/core/services/health/dental-certificate/dental-certificate.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';

import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dental-certificate-form-new',
  templateUrl: './dental-certificate-form-new.component.html',
  styleUrls: ['./dental-certificate-form-new.component.scss']
})
export class DentalCertificateFormNewComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  addURL = "/main/health/dental-certificate/add-form"
  listURL = "/main/health/dental-certificate"
  form_code = 'dc';
  zip_code : any;
  basepath_arr : any;
  checked = true;

  chk_txt = true;
  chk_arr = [1];
  err_res = false;
  dc_requestor : any = [];
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


  dentalForm!: FormGroup;
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
  dc_transaction_total_fee : any;
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
  transactionId:any;
  currentUser: any[] = [];
  userValue: any;
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
    private dentalCertificateService : DentalCertificateService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['personId'];
      this.transactionId = params['id'];
    });


   }

   ngOnInit() {
      //  CHECK IF FOR ADD NEW OR FOR EDIT
    if(this.transactionId !=null){
      this.isEdit = true
      this.loadPerson();
      this.loadTransactionForEdit();
      this.buttonTitle = "Update & Exit"
    }else{
      this.isEdit = false;
      if (this.param) {
        this.isLoading = false;
        this.buttonTitle = "Save & Exit"
        this.loadPerson();
      } else {
        this.buttonTitle = "Save & Exit"
      }
    }
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    this.basepath_arr = this.pathservice.getPath();

    this.dentalForm = this.fb.group({
      //PERSON DATA --------------
      business_emp_name : [' '],
      trade_name : [' '],
      bus_emp_address : [' '],
      prefix: [' '],
      person_id :[' '],
      first_name: [' ', [Validators.required]],
      middle_name: [' '],
      last_name: [' ', [Validators.required]],
      suffix: [' '],
      province_id: [' ', [Validators.required]],
      citmun_id: [' ', [Validators.required]],
      barangay_id: [' ', [Validators.required]],
      street: [' '],
      birth_date: [' ', [Validators.required]],
      citizenship: [' ', [Validators.required]],
      height: [0],
      weight: [0],
      gender_id: [' ', [Validators.required]],
      place_of_birth: [' ', [Validators.required]],
      tin: [' '],
      civil_status_id: [' ', [Validators.required]],
      profession: [' '],
      religion: [' '],
      person_image: [' '],
      person_file_name: [' '],
      person_base64: [' '],
      mayor :[' '],

      // MEDICAL TRANSACTIONS ------------------
      dc_person_fullname : [''],
      dc_person_age : [''].toString(),
      dc_person_address :[''],
      dc_transaction_date : this.date,
      dc_transaction_type : 'dental certificate',
      dc_transaction_status : 0,
      dc_transaction_total_fee : [''],
      dc_person_id : this.param,
      dc_department_head : this.userValue.userName_User,
      //MEDICAL EXAM -------------------
      med_exam_id: [''],
      examiner_name :[''],
      examination_date : [''],
      examination_address : [''],
      examination_finding :[''],
      examination_cause : [''],
      dc_exams_data: this.fb.array([]),
      //REQUESTOR INFO ------------------------
      dc_requestor : this.fb.group({
        agree :[' '],
        requestor_name : [' '],
        remarks : [' '],
        requestor_id : [' '],
        status :[' '],
    }),
    });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.dentalForm.patchValue({
          first_name: params['firstname'],
          middle_name: params['middlename'],
          last_name: params['lastname']
        })
      }

    })


    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
      this.personService.getDropdownValues().subscribe(data => {
        this.genderDropdown = data[0].gender
        this.civilStatusDropdown = data[1].civil_status
        this.personService.getDropdowncityMun(73).subscribe(data => {
          this.citymunDropdown = data
          this.zip_code = data[0].zip_code
          this.isLoading = false

        })
      })
    })



    // GET MEDICAL EXAMINATION TITTLES
    this.healthService.getMed_ExamList(this.form_code).subscribe(data =>{
      this.listOfMedExam = data
    })

  }

  isEdit : boolean = false;
  loadPerson(){
    this.personService.getPersonGUID(this.param).subscribe((data: any) => {

      console.log(data);

     this.dentalForm.patchValue({
       prefix: data[0].prefix,
       person_id : this.param,
       first_name: data[0].first_name,
       middle_name: data[0].middle_name,
       last_name: data[0].last_name,
       suffix: data[0].suffix,
       province_id: data[0].province_id,
       citmun_id: data[0].citmun_id.toString(),
       barangay_id: data[0].barangay_id.toString(),
       street: data[0].street,
       birth_date: data[0].birth_date,
       citizenship: data[0].citizenship,
       height: data[0].height,
       weight: data[0].weight,
       gender_id: data[0].gender_id.toString(),
       place_of_birth: data[0].place_of_birth,
       tin: data[0].tin,
       civil_status_id: data[0].civil_status_id.toString(),
       profession: data[0].profession,
       religion: data[0].religion,
       dc_person_age : data[0].age,
       dc_person_fullname : data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name,
       dc_person_address : data[0].brgy_name +","+data[0].city_mun_name
     })

     this.name = data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name;
     this.occupation = data[0].profession;
     this.address = data[0].barangay_name +","+data[0].city;
     this.bdate = data[0].birth_date;
     this.age = moment().diff(this.bdate, 'years').toString();
     this.nationality = data[0].citizenship
     this.addRequestor(true);
   })
  }

  loadTransactionForEdit(){
    this,this.isEdit = true
     this.dentalCertificateService.getDental_ExamDtl(this.transactionId).subscribe(data => {

       const dtl = data
       console.log(dtl)

       dtl.forEach((data : any) => {
         this.medExamArray().push(
           this.fb.group({
            dc_main_id : data.dc_main_id,
             dc_examiner_name : data.dc_examiner_name,
             dc_lab_exam_id : data.dc_lab_exam_id,
             dc_lab_exam_name : data.dc_lab_exam_name,
             dc_lab_exam_date : data.dc_lab_exam_date,
             dc_lab_exam_place : data.dc_lab_exam_place,
             dc_lab_exam_result : data.dc_lab_exam_result,
             dc_lab_exam_cause : data.dc_lab_exam_cause,
             dc_lab_fee : data.lab_fee,
             dc_status: `1`,
           })
         )
       })
     })
  }
  provinceSelect(id:any){
    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
      this.dentalForm.patchValue({

      })
    })

  }
  cityMunSelect(id:number){
    this.personService.getBarangay(id).subscribe(data => {
      this.barangayDropdown = data
      this.isLoading = false

    })
    this.personService.getDropdowncityMun(id).subscribe(data => {
      this.citymunDropdown = data
      this.isLoading = false
      this.dentalForm.patchValue({
        zip_code : data[0].zip_code
      })
    })
  }
  addRequestor(value: any, e? : MouseEvent) : void{
    if (value == true) {
      this.checked = true
      this.dentalForm.patchValue({
        dc_requestor:{
          requestor_name : this.name,
          remarks : this.dentalForm.value.remarks,
          requestor_id : this.param,
          status : 'active',
        }
      })
    } else {
      this.checked = false
      this.dentalForm.patchValue({
        dc_requestor:{
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
    return this.dentalForm.get("hc_requestor") as FormArray
  }

  requestorFields( data : any) : FormGroup{
    return this.fb.group({
      pk_id : "",
      requestor_id : this.param,
      requestor_name : this.name,
      status : "1",
      remarks : data.remarks,
    })
  }

  loadMedExam(event : any){
    var guid = this.param;
    var med_id = this.dentalForm.value.med_exam_id;
      this.lab_exam_name = this.listOfMedExam.filter((x : any) => x.lab_exam_id == event).map((y : any) => y.lab_exam_type)[0]
      this.lab_exam_fee = this.listOfMedExam.filter((i : any)=> i.lab_exam_id == event).map((ii : any)=> ii.lab_fee)[0]
      console.log(this.lab_exam_name)
  }

 cancel(): void {
    this.router.navigate(['/main/health/dental-certificate/add-form'])
  }
  showConfirm(value:any): void {
    this.modal.confirm({
    nzTitle: '<i>Do you Want to proceed?</i>',
    nzContent: "<b>Applicant's Name: "+this.dentalForm.value.last_name+", "+ this.dentalForm.value.first_name+" "+ this.dentalForm.value.middle_name+"</b>",
    nzOnOk: () =>{
    this.submitForm(value)
    }
    });
}
submitForm(value:any): void {
  if (this.isEdit) {
    console.log(value)
    if (this.medExamArray().length != 0) {
      this.dentalCertificateService.updateTransaction(this.transactionId,value.dc_exams_data).subscribe( data=> {
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
            'Record Updated unsuccessfully',
          );this.saveLoading = false;
        }

      });
   }else {
    this.isLoading =false;
      this.notification.create(
        "error",
        'Please Add Dental Procedure',
        'unsuccessfully Saved.'
      );this.saveLoading = false;
    }

  } else {
 if (this.medExamArray().length != 0) {
    this.dentalCertificateService.saveNewTransaction(value).subscribe( data=> {
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
 }else {
  this.isLoading =false;
    this.notification.create(
      "error",
      'Please Add Dental Procedure',
      'unsuccessfully Saved.'
    );this.saveLoading = false;
  }
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
     var a =  this.dentalForm.controls[ev_].value;
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

  addNewExamRecored(e? : MouseEvent) : void{
    var med_exam_id = this.dentalForm.value.med_exam_id = Number(this.dentalForm.value.med_exam_id);

    this.medExamArray().push(this.medExamFields(this.dentalForm.value))
    let sum : number = this.medExamArray().value.map((a : any) => a.dc_lab_fee).reduce(function(a : any, b : any){
        return a + b;
    })
    this.dc_transaction_total_fee = sum
    this.dentalForm.patchValue({
      dc_transaction_total_fee : sum
    })
   console.log("asd", this.medExamArray().value)
   console.log("this total ....", sum)
  }

  medExamFields(data :any): FormGroup{
    return this.fb.group({
      dc_dtl_id : "",
      dc_main_id : "",
      dc_examiner_name : data.examiner_name,
      dc_lab_exam_id : data.med_exam_id,
      dc_lab_exam_name : this.lab_exam_name,
      dc_lab_exam_date : data.examination_date,
      dc_lab_exam_place : data.examination_address,
      dc_lab_exam_result : data.examination_finding,
      dc_lab_exam_cause : data.examination_cause,
      dc_lab_fee : this.lab_exam_fee,
      dc_status: `1`,
    })

  }

  medExamArray() : FormArray {
    return this.dentalForm.get("dc_exams_data") as FormArray
  }

  delete_exam(i : any, en : any){
    i.preventDefault()
    this.medExamArray().removeAt(en)

  }
}


