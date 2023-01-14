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


@Component({
  selector: 'app-health-card-from-new',
  templateUrl: './health-card-from-new.component.html',
  styleUrls: ['./health-card-from-new.component.scss']
})
export class HealthCardFromNewComponent implements OnInit {
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }
  listURL = "/main/health/health-card-individual"
  addURL = "/main/health/health-card-individual/add-form"
  newURL = "/main/health/health-card-individual/add-form-new"
  printListURL = "/main/health/health-card-individual/health-card-list-print"
  basepath = "health-card-print";
  backpath = 'add-form';
  basepath_arr : any;
  form_code = 'hc';
  checked = true;
  generateGuId : any;
  chk_txt = true;
  chk_arr = [1];
  err_res = false;
  // hc_requestor : any = [];
  new_person_trans_data :any = [] ;
  err_message = '';
  dateToday = new Date();
  bdate: any;
  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  buttonTitle: any;
  imageUrl: string = "assets/img/MunicipalLogo.png";

  validateForm!: FormGroup;
  date = null;
  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  listOfMedExam: any= [];
  listOfData_trans : any = [];


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
  pk_id:any;
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
    private pathservice : PathsegmentService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['personId'];
      this.pk_id = params['id'];
    });


   }

  ngOnInit() {
    //  CHECK IF FOR ADD NEW OR FOR EDIT
    if(this.pk_id !=null){
      this.isEdit = true
    }else{
      this.isEdit = false;
    }
    this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');

    this.userValue = this.currentUser[0].users;
    this.basepath_arr = this.pathservice.getPath();

    this.validateForm = this.fb.group({
      transaction_date : this.dateToday,
      transaction_status : '0',
      transaction_type : 'Healthcard-Individual',
      prefix: [' '],
      person_id :[' '],
      first_name: [' '],
      middle_name: [' '],
      last_name: [' '],
      suffix: [' '],
      province_id: [' '],
      citmun_id: [' '],
      barangay_id: [' '],
      street: [' '],
      birth_date: [''],
      citizenship: [' '],
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
      med_exam_id: [' ', [Validators.required]],
      examiner_name : [' ', [Validators.required]],
      examination_date : [,  [Validators.required]],
      examination_address : [' ', [Validators.required]],
      examination_finding : [' ', [Validators.required]],
      examination_cause : [' ', [Validators.required]],
      //REQUESTOR INFO ------------------------
      hc_requestor : this.fb.group({
            agree :[' '],
            requestor_name : [' '],
            remarks : [' '],
            requestor_id : [' '],
            status :[' '],
        }),
      hc_form_trans_data_arr: this.fb.array([])
    });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.validateForm.patchValue({
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
          this.isLoading = false
        })
      })
    })



    // GET MEDICAL EXAMINATION TITTLES
    this.healthService.getMed_ExamList(this.form_code).subscribe(data =>{
      this.listOfMedExam = data
    })


    var defaultProvince = 73
    var defaultMunicipality = 40
    this.validateForm.patchValue({
      province_id: defaultProvince.toString(),
      citmun_id: defaultMunicipality.toString()
    })

    if (this.param) {
      this.buttonTitle = "Save & Exit"
      if(this.isEdit){
          this.loadPerson();
          this.addRequestor(true);
          this.loadForEdit();
      }else{
          this.loadPerson();
          this.addRequestor(true);
      }

    } else {
      this.buttonTitle = "Save & Exit"
    }

  }
  loadPerson(){
    this.personService.getPersonGUID(this.param).subscribe((data: any) => {

      // console.log(data);
      this.validateForm.patchValue({
        prefix: data[0].prefix,
        person_id : data[0].person_guid,
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
      })

      this.name = data[0].first_name +" "+ data[0].middle_name +" " +data[0].last_name;
      this.occupation = data[0].profession;
      this.address = data[0].barangay_name +","+data[0].citmun_name;
      this.bdate = data[0].birth_date;
      this.age = moment().diff(this.bdate, 'years');
      this.nationality = data[0].citizenship

      this.addRequestor(true);
    })
  }
  loadForEdit(){
          this.isEdit = true
          this.healthService.getHealthCardTransactionList(this.pk_id).subscribe(data => {
            const dtl = data
           // console.log(dtl)
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
  cityMunSelect(id:number){
    this.personService.getBarangay(id).subscribe(data => {
      this.barangayDropdown = data
      this.isLoading = false
    })
  }
  loadMedExam(){
      var guid = this.param;
    var med_id = this.validateForm.value.med_exam_id;
    this.healthService.setHealthCardTransactionExamList(guid , med_id).subscribe(data => {
      this.listOfData_trans = data
    });
  }

 cancel(): void {
    if(this.isEdit){
      this.router.navigate([this.listURL]);
    }else{
    this.router.navigate(["/"+this.basepath_arr[0]+"/"+this.basepath_arr[1]+"/"+this.basepath_arr[2]+"/"+this.backpath]);
    }
  }


  showConfirm(value:any): void {
    this.modal.confirm({
    nzTitle: '<i>Do you Want to proceed?</i>',
    nzContent: "<b>Applicant's Name: "+this.validateForm.value.last_name+", "+ this.validateForm.value.first_name+" "+ this.validateForm.value.middle_name+"</b>",
    nzOnOk: () =>{
    this.submitForm(value)
    }
    });
}
  submitForm(value:any): void {

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
        console.log("THIS", value)
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
      this.router.navigate([this.listURL]);
    }else{
      this.router.navigate([this.addURL]);
    }

  }
  proccedToPrintCard( data_id : any) {
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
  addRequestor(value: any, e? : MouseEvent) : void{
    if (value == true) {
      this.checked = true
      this.validateForm.patchValue({
        hc_requestor:{
          requestor_name : this.name,
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
      requestor_name : this.name,
      status : "1",
      remarks : data.remarks,
    })
  }

  addNewExamRecored(e? : MouseEvent) : void{
    var med_exam_id = this.validateForm.value.med_exam_id = Number(this.validateForm.value.med_exam_id);

    this.medExamArray().push(this.medExamFields(this.validateForm.value))
   // console.log(this.medExamArray().controls)
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

  }
}


