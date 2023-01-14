import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medical-certificate-form-new',
  templateUrl: './medical-certificate-form-new.component.html',
  styleUrls: ['./medical-certificate-form-new.component.scss']
})
export class MedicalCertificateFormNewComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  addURL = "/main/health/medical-certificate/add-form"
  listURL = "/main/health/medical-certificate"
  form_code = 'mc';
  zip_code : any;
  basepath_arr : any;
  checked = true;

  chk_txt = true;
  chk_arr = [1];
  err_res = false;
  hc_requestor : any = [];
  new_person_trans_data :any = [] ;
  err_message = '';
  listofDoctors: any = [];
  dateToday = new Date().getFullYear();
  bdate: any;
  loading = false;
  avatarUrl?: string;
  isLoading = true;
  saveLoading = false;
  param: any;
  transaction_id : any;
  buttonTitle: any;
  date = new Date;


  medicalForm!: FormGroup;
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
  isEdit: boolean = false
  currentUser: any[] = [];
  userValue: any;
  chk_array = true;
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
    private medicalCertificateService: MedicalCertificateService,
    private medicalAbstractServices : MedicalAbstractService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.transaction_id = params['tid']
    });


   }

   ngOnInit() {
    //  CHECK IF FOR ADD NEW OR FOR EDIT
    if(this.transaction_id !=null){
      this.isEdit = true;
      this.chk_array = false;
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
    console.log('this is the user'+this.userValue)
    this.basepath_arr = this.pathservice.getPath();
    this.medicalForm = this.fb.group({
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
      mayor: [' '],
      doctorid_in_charge:[''],
      doctorfname_in_charge: [''],
      doctorposition_in_charge :[''],

      // MEDICAL TRANSACTIONS ------------------
      mc_person_fullname : [''],
      mc_person_age : [''].toString(),
      mc_person_address :[''],
      mc_transaction_date : this.date,
      mc_transaction_type : 'medical certificate',
      mc_transaction_status : 0,
      mc_transaction_total_fee : [''],
      mc_person_id : this.param,
      mc_department_head : this.userValue.userName_User,
      //MEDICAL EXAM -------------------
      med_exam_id: [''],
      examiner_name :[''],
      examination_date : [''],
      examination_address : [''],
      examination_finding :[''],
      examination_cause : [''],
      mc_exams_data: this.fb.array([]),
      //REQUESTOR INFO ------------------------
      mc_requestor : this.fb.group({
        agree :[' '],
        requestor_name : [' '],
        remarks : [' '],
        requestor_id : [' '],
        status :[' '],
    }),
    });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.medicalForm.patchValue({
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

    if (this.param) {
      this.buttonTitle = "Save & Exit"
      this.loadPerson();
    } else {
      this.buttonTitle = "Save & Exit"
    }

  }

  loadPerson(){
    this.personService.getPersonGUID(this.param).subscribe((data: any) => {

      console.log(data);

     this.medicalForm.patchValue({
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
       mc_person_age : data[0].age,
       mc_person_fullname : data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name,
       mc_person_address : data[0].brgy_name +","+data[0].city_mun_name
     })
     this.name = data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name;
     this.occupation = data[0].profession;
     this.address = data[0].barangay_name +","+data[0].city;
     this.bdate = data[0].birth_date;
     this.age = moment().diff(this.bdate, 'years').toString();
     this.nationality = data[0].citizenship
     this.addRequestor(true);
    })
    this.medicalAbstractServices.getSignatory().subscribe(sigs => {
      this.listofDoctors = sigs;
      //console.log("signatories", this.listofDoctors)
    })
  }
  loadTransactionForEdit(){
      this.isEdit = true;
      this.medicalCertificateService.getDtlsById(this.transaction_id).subscribe( tlist_data =>{
        const dtl = tlist_data
        console.log("this--<",dtl)
        dtl.forEach((data : any) => {
          this.medExamArray().push(
            this.fb.group({
              mc_dtl_id : "",
              mc_main_id : "",
              mc_examiner_name : data.mc_examiner_name,
              mc_lab_exam_id : data.mc_lab_exam_id,
              mc_lab_exam_name : data.mc_lab_exam_name,
              mc_lab_exam_date : data.mc_lab_exam_date,
              mc_lab_exam_place : data.mc_lab_exam_place,
              mc_lab_exam_result : data.mc_lab_exam_result,
              mc_lab_exam_cause : data.mc_lab_exam_cause,
              mc_lab_fee : data.lab_fee,
              mc_status: `1`,
            })
          )
        })
      })
  }
  provinceSelect(id:any){
    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
      this.medicalForm.patchValue({

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
      this.medicalForm.patchValue({
        zip_code : data[0].zip_code
      })
    })
  }
  addRequestor(value: any, e? : MouseEvent) : void{
    if (value == true) {
      this.checked = true
      this.medicalForm.patchValue({
        mc_requestor:{
          requestor_name : this.name,
          remarks : this.medicalForm.value.remarks,
          requestor_id : this.param,
          status : 'active',
        }
      })
    } else {
      this.checked = false
      this.medicalForm.patchValue({
        mc_requestor:{
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
    return this.medicalForm.get("hc_requestor") as FormArray
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
    var med_id = this.medicalForm.value.med_exam_id;
      this.lab_exam_name = this.listOfMedExam.filter((x : any) => x.lab_exam_id == event).map((y : any) => y.lab_exam_type)[0]
      this.lab_exam_fee = this.listOfMedExam.filter((i : any)=> i.lab_exam_id == event).map((ii : any)=> ii.lab_fee)[0]
      console.log(this.lab_exam_name)
  }

 cancel(): void {
   if(this.isEdit){
    this.router.navigate([this.listURL])
   }else{
    this.router.navigate(['/main/health/medical-certificate/add-form'])
   }
  }
  showConfirm(value:any): void {
    this.modal.confirm({
    nzTitle: '<i>Do you Want to proceed?</i>',
    nzContent: "<b>Applicant's Name: "+this.medicalForm.value.last_name+", "+ this.medicalForm.value.first_name+" "+ this.medicalForm.value.middle_name+"</b>",
    nzOnOk: () =>{
    this.submitForm(value)
    }
    });
}
submitForm(value:any): void {

  console.log(value)
 if(this.isEdit){
  console.log(value)
  this.medicalCertificateService.updateDtl(this.transaction_id, value.mc_exams_data).subscribe(data =>{
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
  });
 }else{
  if (this.medExamArray().length != 0) {
    this.medicalCertificateService.saveNewTransaction(value).subscribe( data=> {
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
      'Please Add Medical examination',
      'unsuccessfully Saved.'
    );this.saveLoading = false;
  }
 }
}
backRoute(){
  if(this.isEdit){
    this.router.navigate(['/main/health/medical-certificate'])
  }else{
    this.router.navigate([this.addURL]);
  }
}
  checkVal(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.medicalForm.controls[ev_].value;
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
    var med_exam_id = this.medicalForm.value.med_exam_id = Number(this.medicalForm.value.med_exam_id);

    this.medExamArray().push(this.medExamFields(this.medicalForm.value))
    let sum : number = this.medExamArray().value.map((a : any) => a.mc_lab_fee).reduce(function(a : any, b : any){
        return a + b;
    })
    this.mc_transaction_total_fee = sum
    this.medicalForm.patchValue({
      mc_transaction_total_fee : sum
    })
    this.checkArrays();
  //  console.log("asd", this.medExamArray().value)
  //  console.log("this total ....", sum)
  }

  medExamFields(data :any): FormGroup{
    return this.fb.group({
      mc_dtl_id : "",
      mc_main_id : "",
      mc_examiner_name : data.examiner_name,
      mc_lab_exam_id : data.med_exam_id,
      mc_lab_exam_name : this.lab_exam_name,
      mc_lab_exam_date : data.examination_date,
      mc_lab_exam_place : data.examination_address,
      mc_lab_exam_result : data.examination_finding,
      mc_lab_exam_cause : data.examination_cause,
      mc_lab_fee : this.lab_exam_fee,
      mc_status: `1`,
    })

  }

  medExamArray() : FormArray {
    return this.medicalForm.get("mc_exams_data") as FormArray
  }

  delete_exam(i : any, en : any){
    i.preventDefault()
    this.medExamArray().removeAt(en)
    this.checkArrays();
  }
  setDoctor(data: any) {
    this.medicalForm.patchValue({
      doctorid_in_charge: data.person_id,
      doctorfname_in_charge: data.fullname,
      doctorposition_in_charge :data.position,
    });
    this.checkArrays()
  }
  remDoctor() {
    this.medicalForm.patchValue({
      doctorid_in_charge: "",
      doctorfname_in_charge: "",
      doctorposition_in_charge :"",
    });
    this.chk_array = true;
  }
  checkArrays(){
    if(this.isEdit){
      this.chk_array = false;
    }else{
      if (this.medExamArray().length !=0 && this.medicalForm.value.doctorid_in_charge.length !=0) {
        //console.log("yeah")
        this.chk_array = false;

     } else {
        //console.log("no")
         this.chk_array = true;
      }
    }
    }
}


