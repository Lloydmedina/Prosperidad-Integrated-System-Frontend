import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clinical-abstract-form-new',
  templateUrl: './clinical-abstract-form-new.component.html',
  styleUrls: ['./clinical-abstract-form-new.component.scss']
})
export class ClinicalAbstractFormNewComponent implements OnInit {


  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  addURL = "/main/health/medical-abstract/add-form"
  listUrl = "/main/health/medical-abstract"
  form_code = 'mc';
  zip_code : any;
  basepath_arr : any;
  checked = true;

  chk_txt = true;
  hpi_txt = true;
  pe_txt = true;
  dx_txt = true;
  med_txt = true;
  chk_arr = [1];
  chk_array = true;
  err_res = false;
  ma_requestor : any = [];
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
  date =  new Date().getUTCDate().toString()


  abstractForm!: FormGroup;
  birthdate = null;

  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  listOfMedExam: any= [];
  listOfMedTypes:any = [];
  listOfHPI : any = [];
  listOfData_trans: any = [];
  listofDoctors: any = [];
  lab_exam_name : any;
  lab_exam_fee : any;
  ma_transaction_total_fee : any;
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
  isEdit: boolean = false
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
    private medicalAbstractServices : MedicalAbstractService,
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.transactionId = params['tid'];
    });


   }

   ngOnInit() {
      //  CHECK IF FOR ADD NEW OR FOR EDIT
    this.processCheck()
     this.hidden = true;
     this.radioVal = 'ml';
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');
    this.userValue = this.currentUser[0].users;
    //console.log('this is the user'+this.userValue)
    this.basepath_arr = this.pathservice.getPath();
    this.abstractForm = this.fb.group({
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
      birth_date: [''],
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
      doctorid_in_charge: [''],
      doctorfname_in_charge: [''],
      doctorposition_in_charge :[''],

      // MEDICAL TRANSACTIONS ------------------
      ma_person_fullname : [''],
      ma_person_age : [''].toString(),
      ma_person_address :[''],
      ma_transaction_date : [''],
      ma_transaction_type : [''],
      ma_transaction_status : [''],
      ma_transaction_total_fee : [''],
      ma_person_id : [''],
      ma_department_head : this.userValue.userName_User,
      //PE EXAM -------------------
      med_exam_id: [''],
      examiner_name :[''],
      examination_date : [''].toString(),
      examination_address : [''],
      examination_finding :[''],
      examination_cause : [''],
      ma_pe_data: this.fb.array([]),
      //HPI -----------
      hpi_date : [''].toString(),
      hpi_details : [''],
      ma_hpi_data: this.fb.array([]),
      //DX ------------
      dx_date : [''].toString(),
      dx_details : [''],
      dx_treatment : [''],
      ma_dx_data: this.fb.array([]),
      //MEDICATION ----------
      meds_type : [''],
      meds_details : [''],
      ma_meds_data: this.fb.array([]),
      //REQUESTOR INFO ------------------------
      ma_requestor : this.fb.group({
        agree :[' '],
        requestor_name : [' '],
        remarks : [' '],
        requestor_id : [' '],
        status :[' '],
      }),
      ma_doctor : this.fb.group([]),
      form_trans_no: [''],
    });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.abstractForm.patchValue({
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
    // GET MEDICINE TYPES
    this.medicalAbstractServices.getMedTypes().subscribe(data =>{
      this.listOfMedTypes = data
    })
     this.medicalAbstractServices.getSignatory().subscribe(sigs => {
       this.listofDoctors = sigs;
       //console.log("signatories", this.listofDoctors)
     })

  }

  processCheck(){
    if(this.transactionId !=null){
      //console.log("edit->>")
      this.isEdit = true
      this.hidden = false
      this.chk_array = false;
      this.loadPerson();
      this.loadTransactionForEdit();

      this.buttonTitle = "Update & Exit"
    }else{
     // console.log("new->>")
      this.isEdit = false;
      if (this.param) {
        this.isLoading = false;
        this.buttonTitle = "Save & Exit"
        this.loadPerson();
      } else {
        this.buttonTitle = "Save & Exit"
      }
    }
  }
  loadPerson(){
    this.personService.getPersonGUID(this.param).subscribe((data: any) => {
      //console.log("person data ", data);
      this.abstractForm.patchValue({
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
        ma_person_age : data[0].age,
        ma_person_fullname : data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name,
        ma_person_address : data[0].brgy_name +","+data[0].city_mun_name,
        ma_transaction_date : new Date(),
        ma_transaction_type : 'Medical Abstract',
        ma_transaction_status : '0',
        ma_transaction_total_fee : '100',
        ma_person_id : this.param,
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
  abstract_data : any = []  ;
  loadTransactionForEdit(){
    this.medicalAbstractServices.getMedAbstractData(this.transactionId).subscribe(data => {
      this.checkArrays()
      console.log(data)
      this.abstract_data = data[0]
      const hpi = this.abstract_data.map((hpis : any) => hpis.ma_hpi_data)[0]
      const pe = this.abstract_data.map((pes : any) => pes.ma_pe_data)[0]
      const dx = this.abstract_data.map((dxs : any) => dxs.ma_dx_data)[0]
      const meds = this.abstract_data.map((medss : any) => medss.ma_meds_data)[0]
      this.abstractForm.patchValue({
        form_trans_no: data[0][0].form_trans_no,
        doctorid_in_charge: data[0][0].doctorid_in_charge,
        doctorfname_in_charge: data[0][0].doctorfname_in_charge,
        doctorposition_in_charge :data[0][0].doctorposition_in_charge,
      })
      hpi.forEach((hpi_data : any)=> {
        this.hpiArray().push(
          this.fb.group({
            ma_hpi_date: hpi_data.ma_hpi_date,
            ma_hpi_details: hpi_data.ma_hpi_details,
            ma_hpi_dtl_id: hpi_data.ma_hpi_id,
            ma_hpi_examiner_name: hpi_data.ma_hpi_examiner_name,
            ma_hpi_treatment: hpi_data.ma_hpi_treatment,
            ma_main_id:hpi_data.ma_main_id,
            ma_status: hpi_data.ma_status,
        })
        )
      })
      pe.forEach((pe_data : any)=> {
        this.peExamArray().push(
          this.fb.group({
          ma_main_id:pe_data.ma_main_id,
          ma_pe_dtl_id:pe_data.ma_pe_dtl_id,
          ma_pe_examiner_name:pe_data.ma_pe_examiner_name,
          ma_pe_lab_exam_cause:pe_data.ma_pe_lab_exam_cause,
          ma_pe_lab_exam_date:pe_data.ma_pe_lab_exam_date,
          ma_pe_lab_exam_id:pe_data.ma_pe_lab_exam_id,
          ma_pe_lab_exam_name:pe_data.ma_pe_lab_exam_name,
          ma_pe_lab_exam_place:pe_data.ma_pe_lab_exam_place,
          ma_pe_lab_exam_result:pe_data.ma_pe_lab_exam_result,
          ma_status:pe_data.ma_status,
          })
      )
      })
      dx.forEach((dx_data : any)=> {
        this.dxArray().push(
          this.fb.group({
            ma_dx_date: dx_data.ma_dx_date,
          ma_dx_details: dx_data.ma_dx_details,
          ma_dx_dtl_id: dx_data.ma_dx_dtl_id,
          ma_dx_examiner_name: dx_data.ma_dx_examiner_name,
          ma_dx_treatment: dx_data.ma_dx_treatment,
          ma_main_id: dx_data.ma_main_id,
          ma_status: dx_data.ma_status,
          })
      )
      })
      meds.forEach((meds_data : any)=> {
        this.medsArray().push(
          this.fb.group({
            ma_main_id: meds_data.ma_main_id,
          ma_meds_details: meds_data.ma_meds_details,
          ma_meds_dtl_id: meds_data.ma_meds_dtl_id,
          ma_meds_examiner_name: meds_data.ma_meds_examiner_name,
          ma_meds_type: meds_data.ma_meds_type,
          })
      )
      })

    })
  }
  provinceSelect(id:any){
    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
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
      this.abstractForm.patchValue({
        zip_code : data[0].zip_code
      })
    })
  }
  addRequestor(value: any, e? : MouseEvent) : void{
    if (value == true) {
      this.checked = true
      this.abstractForm.patchValue({
        ma_requestor:{
          requestor_name : this.name,
          remarks : this.abstractForm.value.remarks,
          requestor_id : this.param,
          status : 'active',
        }
      })
    } else {
      this.checked = false
      this.abstractForm.patchValue({
        _requestor:{
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
    return this.abstractForm.get("ma_requestor") as FormArray
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
    var med_id = this.abstractForm.value.med_exam_id;
      this.lab_exam_name = this.listOfMedExam.filter((x : any) => x.lab_exam_id == event).map((y : any) => y.lab_exam_type)[0]
      this.lab_exam_fee = this.listOfMedExam.filter((i : any)=> i.lab_exam_id == event).map((ii : any)=> ii.lab_fee)[0]
  }
 cancel(): void {
    this.router.navigate(['/main/health/medical-abstract/add-form'])
  }
  showConfirm(value:any): void {
    this.modal.confirm({
    nzTitle: '<i>Do you Want to proceed?</i>',
    nzContent: "<b>Applicant's Name: "+this.abstractForm.value.last_name+", "+ this.abstractForm.value.first_name+" "+ this.abstractForm.value.middle_name+"</b>",
    nzOnOk: () =>{
    this.submitForm(value)
    }
    });
}


abs_data: any = {}
submitForm(value:any): void {
 if(this.isEdit){

  this.abs_data = {
            ma_hpi_data: value.ma_hpi_data,
            ma_meds_data: value.ma_meds_data,
            ma_dx_data: value.ma_dx_data,
            ma_pe_data: value.ma_pe_data
          }
         // console.log(this.abs_data)
  this.medicalAbstractServices.updateTransaction(this.transactionId, this.abs_data).subscribe( data=> {
    this.isLoading =false;
    if (data) {
      this.saveLoading = false;
      this.backRoute()
      this.notification.create(
        "success",
        'Successfully Updated',
        'Record has updated successfully.'
      );

    } else {
      this.isLoading =false;
      this.saveLoading = false;
      this.notification.create(
        "error",
        'Unsuccessfully Updated',
        'Record has updated unsuccessfully saved.',
      );this.saveLoading = false;
    }

  });
 }else{
 // console.log(value)
  this.medicalAbstractServices.saveNewTransaction(value).subscribe( data=> {
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
    this.router.navigate([this.listUrl])
  } else {
    this.router.navigate([this.addURL]);
  }
}


checkArrays(){
  if(this.isEdit){
    this.chk_array = false;
  }else{
    if (this.hpiArray().length !=  0 && this.peExamArray().length !=  0 && this.dxArray().length !=  0 && this.medsArray().length !=  0 && this.abstractForm.value.doctorid_in_charge.length !=0) {
      //console.log("yeah")
      this.chk_array = false;

   } else {
      //console.log("no")
       this.chk_array = true;
    }
  }
  }
  setDoctor(data: any) {
    this.abstractForm.patchValue({
      doctorid_in_charge: data.person_id,
      doctorfname_in_charge: data.fullname,
      doctorposition_in_charge :data.position,
    });
    this.checkArrays();
  }
  remDoctor() {
    this.abstractForm.patchValue({
      doctorid_in_charge: "",
      doctorfname_in_charge: "",
      doctorposition_in_charge :"",
    });
    this.chk_array = true;
  }
//BASE ARRAY--------------
peExamFields(data :any): FormGroup{
  return this.fb.group({
    ma_dtl_id : "",
    ma_main_id : "",
    ma_pe_examiner_name : data.examiner_name,
    ma_pe_lab_exam_id : data.med_exam_id,
    ma_pe_lab_exam_name : this.lab_exam_name,
    ma_pe_lab_exam_date : data.examination_date,
    ma_pe_lab_exam_place : data.examination_address,
    ma_pe_lab_exam_result : data.examination_finding,
    ma_pe_lab_exam_cause : data.examination_cause,
    ma_lab_fee : this.lab_exam_fee,
    ma_status: `1`,
  })
}
hipFields(data : any) : FormGroup{
  return this.fb.group({
    ma_hpi_dtl_id: "",
    ma_main_id : "",
    ma_hpi_date : new Date(),
    ma_hpi_details : data.hpi_details,
    ma_status : `1`,
  })
}
dxFields(data : any ) : FormGroup{
  return this.fb.group({
    ma_dx_dtl_id: "",
    ma_main_id : "",
    ma_dx_date : this.date,
    ma_dx_details : data.dx_details,
    ma_dx_treatment : data.dx_treatment,
    ma_status : `1`,
  })
}
medsFields(data : any) : FormGroup{
return this.fb.group({
    ma_meds_dtl_id: "",
    ma_main_id : "",
    ma_meds_type : data.meds_type,
    ma_meds_details : data.meds_details,
})
}
  //INITIATE ARRAY-----------
  peExamArray() : FormArray {
    return this.abstractForm.get("ma_pe_data") as FormArray
  }
  hpiArray() : FormArray {
    return this.abstractForm.get("ma_hpi_data") as FormArray
  }
  dxArray() : FormArray {
    return this.abstractForm.get("ma_dx_data") as FormArray
  }
  medsArray() : FormArray{
    return this.abstractForm.get("ma_meds_data") as FormArray
  }
  //INJECT ARRAY -------------
  addPeRecored(e? : MouseEvent) : void{
    this.peExamArray().push(this.peExamFields(this.abstractForm.value))
    let sum : number = this.peExamArray().value.map((a : any) => a.ma_lab_fee).reduce(function(a : any, b : any){
        return a + b;
    })
    this.ma_transaction_total_fee = sum
    this.abstractForm.patchValue({
      ma_transaction_total_fee : sum
    })
  }

  addHpiRecord(e? : MouseEvent){
    this.hpiArray().push(this.hipFields(this.abstractForm.value));
    //console.log(this.hpiArray())
    this.abstractForm.patchValue({
      hpi_details : " "
    })
  }

  addDxRecord(e? : MouseEvent){
    this.dxArray().push(this.dxFields(this.abstractForm.value));
    this.abstractForm.patchValue({
      dx_details : " ",
      dx_treatment : " "
    })
  }

  addMedsRecord(e? : MouseEvent){
    this.medsArray().push(this.medsFields(this.abstractForm.value));
   // console.log(this.abstractForm.value.ma_meds_data)
    this.abstractForm.patchValue({
      ma_meds_type : 1,
      ma_meds_details : " ",
    })
    this.checkArrays()
  }

// CHECK TEXTBOX VALUES -----------

checkVal(element: any){
  var ev_ = element.target.getAttribute('formControlName')
    var a =  this.abstractForm.controls[ev_].value;
   if (a === null) {
    this.chk_txt = true;
    this.checkArrays()
   } else if(this.chk_arr.length > 3){
       this.chk_txt = false;
       this.checkArrays()
     } else {
       this.chk_txt = true;
       this.chk_arr.push(1);
       this.checkArrays()
   }

 }

 checkVals(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.abstractForm.controls[ev_].value;
     if(a.length > 2){
        this.chk_txt = false;
        this.checkArrays()
      } else {
       this.chk_txt = true;
        this.chk_arr.push(1);
        this.checkArrays()
    }

  }
  checkhpi(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.abstractForm.controls[ev_].value;
     if(a.length > 2){
        this.hpi_txt = false;
        this.checkArrays()
      } else {
       this.hpi_txt = true;
        this.checkArrays()
    }

  }
  checkpe(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.abstractForm.controls[ev_].value;
     if(a.length > 2){
        this.pe_txt = false;
        this.checkArrays()
      } else {
       this.pe_txt = true;
        this.checkArrays()
    }
  }
  checkdx(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.abstractForm.controls[ev_].value;
     if(a.length > 2){
        this.dx_txt = false;
        this.checkArrays()
      } else {
       this.dx_txt = true;
        this.checkArrays()
    }

  }
  checkmed(element: any){
   var ev_ = element.target.getAttribute('formControlName')
     var a =  this.abstractForm.controls[ev_].value;
     var b = this.abstractForm.controls['meds_type'].value;
    // console.log(b)
     if (b !=null) {
      if(a.length > 2){
        this.med_txt = false;
        this.checkArrays()
      } else {
       this.med_txt = true;
    }
    }else {
      this.med_txt = true;
   }
  }
//REMOVE ARRAY ----------------
  delete_exam(i : any, en : any){
    i.preventDefault()
    this.peExamArray().removeAt(en)
    this.checkArrays();
  }
  delete_hpi(i : any, en : any){
    i.preventDefault()
    this.hpiArray().removeAt(en)
    this.checkArrays()
  }
  delete_dx(i : any, en : any){
    i.preventDefault()
    this.dxArray().removeAt(en)
    this.checkArrays()
  }
  delete_meds(i : any, en : any){
    i.preventDefault()
    this.medsArray().removeAt(en)
    this.checkArrays()
  }
//INNER CONTENT

domainList: any = [];
parentFolderList: any = []
labelName = "Folder Name";
title="";

resetValue="Yearly";

seriesLength = 4;
seriesStart = "1";
seriesSeparator = "-";

filterList: any = []
filterValue = 1;
selectedIndex: number = 0;
selectedTab : number = 1;
hidden: any;
form_Name: any;
formAlias: any;
actionTypeList: any = [];
radioVal : any;
showBackBtn = false
showNextBtn = true;

showExtraTab(e : any){
  if(e.index != 0){
    this.hidden = false
  }else{
    this.hidden = true
  }
}

counter = 0;
  nextTab(){

      this.counter += 1;
      this.selectedIndex += 1;
      this.changeTab(this.selectedIndex)

  }

  modalCheck = 0;
  back(){
      this.counter-= 1
      this.selectedIndex -=1
      this.changeTab(this.selectedIndex)
  }

  changeTab(index:number){
    if(this.counter == 0)
    {
      this.showBackBtn = false
    }else if (this.counter == 1)
    {
      this.showBackBtn = true
      this.showNextBtn = true
    }else if (this.counter == 2)
    {
      this.showBackBtn = true
      this.showNextBtn = true
  }else if (this.counter == 3)
  {
    this.showBackBtn = true
    this.showNextBtn = true
  }else
    {

      this.showNextBtn = false
    }
  }

}
