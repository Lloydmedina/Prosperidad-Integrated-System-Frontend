import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-child-info-form',
  templateUrl: './child-info-form.component.html',
  styleUrls: ['./child-info-form.component.scss']
})
export class ChildInfoFormComponent implements OnInit {

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;
  date = new Date();
  dataDisplay: any;
  dataDisplayEccd: any;
  dataDisplayHealth: any;
  dataDisplayNutritional: any;
  dataDisplayFirstEvaluation: any;
  dataDisplaySecondEvaluation: any;
  dataDisplayThirdEvaluation: any;
  current = 0;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  civilStatusDropdown: any = [];
  educationalTypeDropdown: any = [];
  genderDropdown: any;
  mainPersonGuid: any;
  regionList: any;

  checkedBreastFeeding = false;
  checkedSupplementaryFeeding = false;
  checkedDisability = false;
  checkedListahanan = false;
  checkedPantawid = false;
  checkedParticipationFee = false;

  radioBreastFeedingValue: any;
  radioScheduledSessionValue: any;
  radioParentsCounterpartValue: any;
  radioAttendanceStatusValue: any;
  radioReasonDropoutValue: any;

  hideBreastfeeding = false;
  hideSupplementary = false;
  hideChildDisability = false;
  hidePantawid = false;
  hidePaidAmount = false;
  hideReasonOthers = false;

  path: any;
  generateHealthData: any = [];
  generateHealthDomainsData: any = [];

  incomeAmountDetails = []
  familymemberDetails: any;

  firstRawScoreID = [];
  firstScaledScoreID = [];
  secondRawScoreID = [];
  secondScaledScoreID = [];
  thirdRawScoreID = [];
  thirdScaledScoreID = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService,
    private childInfoService: ChildInfoService,
    private personService: PersonService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.addParam = params['person_guid']
    });
  }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({
      person_guid: [null],
      facility_region_id: [null, [Validators.required]],
      facility_province_id: [null, [Validators.required]],
      facility_citmun_id: [null, [Validators.required]],
      facility_barangay_id: [null, [Validators.required]],
      facility_street: [null, [Validators.required]],
      facility_name: [null, [Validators.required]],
      service_provider: [null, [Validators.required]],
      nickname: [null],
      region_id: [null, [Validators.required]],
      province_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      street: [null],
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      suffix: [null],
      birth_date: [null, [Validators.required]],
      place_of_birth: [null, [Validators.required]],
      gender_id: [null, [Validators.required]],
      birth_order: [null, [Validators.required]],
      birth_registered: [null, [Validators.required]],
      no_of_siblings: [null, [Validators.required]],
      religion: [null],
      ethnicity: [null],
      breast_feeding: [null],
      kind_of_breastfeeding: [null],
      months_breasted: [null],
      supplementary_feeding: [null],
      supplementary_days: [null],
      child_disability: [null],
      child_referred: [null],
      listahanan: [null],
      pantawid_beneficiary: [null],
      household_id: [null],
      participation_fee: [null],
      paid_amount: [null],
      scheduled_session: [null],
      parents_counterpart: [null],
      attendance_status: [null],
      school_year: [null],
      reason_for_dropout: [null],
      dropout_specify_others: [null],
      disability_details: this.fb.array([]),
      eccd_details: this.fb.array([]),
      health_details: this.fb.array([]),
      nutritional_details: this.fb.array([]),
      first_evaluation_details: this.fb.array([]),
      second_evaluation_details: this.fb.array([]),
      third_evaluation_details: this.fb.array([]),
      first_evaluation_date: [null],
      second_evaluation_date: [null],
      third_evaluation_date: [null],
      form_trans_no: [null],
    })

    this.route.queryParams.subscribe(params => {
      // let bDate = new DatePipe('en-Us').transform(params['birth_date'], 'yyyy-MM-dd' + 'T' + 'hh:mm:ss', 'GMT+0800');
      if (params) {
        this.validateForm.patchValue({
          first_name: params['firstname'],
          middle_name: params['middlename'],
          last_name: params['lastname'],
          suffix: params['suffix_name'],
          prefix: params['prefix'],
          province_id: params['province_id'],
          citmun_id: params['citmun_id'],
          barangay_id: params['barangay_id'],
          street: params['street'],
          gender_id: params['gender_id'],
          place_of_birth: params['place_of_birth'],
          civil_status_id: params['civil_status_id'],
          age: params['age'],
          religion: params['religion']
        })
        this.date = params['birth_date']
        console.log("params", params)
      }
    })

    this.personService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
    })
    this.personService.getDropdowncityMun(73).subscribe(data => {
      this.citymunDropdown = data
      // console.log("LIST REG", data)
    })
    this.personService.getBarangay(40).subscribe(data => {
      this.barangayDropdown = data
    })
    this.personService.getDropdownValues().subscribe(data => {
      this.genderDropdown = data[0].gender
      this.civilStatusDropdown = data[1].civil_status
    })

    this.generateHealthDomainsData = [
      "a. Fine Motor Development",
      "b. Gross Motor",
      "c. Self-Help",
      "d. Receptive Language",
      "e. Expressive Language",
      "f. Cognitive",
      "g. Socio Emotional",
    ]

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = false;
      // this.childInfoService.getChildInfoEdit(this.param).subscribe((main_data: any) => {
      //   this.isLoading = false;
      //   this.mainPersonGuid = main_data.person_guid;
      //   console.log("MAIN DATA", main_data)
      //   this.validateForm.patchValue({
      //     province_id: main_data.province_id.toString(),
      //     barangay_id: main_data.barangay_id.toString(),
      //     street: main_data.street,
      //     citmun_id: main_data.citmun_id.toString(),
      //     prefix: main_data.prefix,
      //     first_name: main_data.first_name,
      //     middle_name: main_data.middle_name,
      //     last_name: main_data.last_name,
      //     suffix: main_data.suffix,
      //     birth_date: main_data.birth_date,
      //     place_of_birth: main_data.place_of_birth,
      //     gender_id: main_data.gender_id.toString(),
      //     occupation: main_data.profession,
      //     circumstances: main_data.circumstances,
      //     need_or_problem: main_data.need_or_problem,
      //     reason_for_applying: main_data.reason_for_applying,
      //     family_resources: main_data.family_resources,
      //     form_trans_no: main_data.form_trans_no,
      //   })

      //   this.familymemberDetails = main_data.family_details;
      //   if(this.familymemberDetails != null) {
      //     this.dataDisplay = ['']
      //     this.familymemberDetails.forEach((element: any) => {
      //       this.quantitiesDisability().push(
      //         this.fb.group({
      //           full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
      //           person_guid: element.person_guid,
      //           relation: element.relation,
      //           age: element.age,
      //           gender_name: element.gender_name,
      //           educational_attainment: element.educational_attainment,
      //           occupational_skills: element.occupational_skills,
      //           remarks: element.remarks,
      //           occupation_income: element.occupation_income
      //         })
      //       );
            
      //     });
      //   }

      //   this.updateIncome()
      // })
    } else {
      this.buttonTitle = "Save & Exit"

      this.validateForm.patchValue({
        province_id: "73",
        citmun_id: "40"
      })

      if (this.addParam) {
        this.isLoading = true;
        this.personService.getPersonGUID(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
          console.log("OHOY", data)
          this.validateForm.patchValue({
            prefix: data[0].prefix,
            first_name: data[0].first_name,
            middle_name: data[0].middle_name,
            last_name: data[0].last_name,
            suffix: data[0].suffix,
            province_id: data[0].province_id.toString(),
            citmun_id: data[0].citmun_id.toString(),
            barangay_id: data[0].barangay_id.toString(),
            street: data[0].street,
            birth_date: data[0].birth_date,
            gender_id: data[0].gender_id.toString(),
            place_of_birth: data[0].place_of_birth,
            civil_status_id: data[0].civil_status_id.toString(),
            occupation: data[0].profession,
            religion: data[0].religion,
            person_image: data[0].person_image,
            person_file_name: data[0].person_file_name,
            person_base64: data[0].person_base64,
            region_id: data[0].region_id.toString(),
            educational_attainment: data[0].educational_attainment.toString(),
            blood_type_id: data[0].blood_type_id.toString(),
            telephone_no: data[0].telephone_no,
            mobile_no: data[0].phone_no,
            email_address: data[0].email_address,
          })

        })
      }

      this.generateHealthData = [
        "Newborn Screening",
        "BCG Vaccination (at birth)",
        "DPT Vaccination (6, 20 & 14 weeks old)",
        "OPV Vaccination (6, 20 & 14 weeks old)",
        "Hepatitis B Vaccination (6, 20 & 14 weeks old)",
        "Measles Vaccination (9 months)",
        "Vitamin A (starting from 6 months)",
        "Deworming",
        "Dental Checkup",
        "Physical Checkup",
        "Micronutrient Supplement"
      ]

      this.generateHealthData.forEach((element: any) => {
        this.dataDisplayHealth = ['']
        this.quantitiesHealth().push(this.fb.group({
          healthService: element,
          healthDate: null
        }))
      });

      this.generateHealthDomainsData.forEach((element: any) => {
        this.dataDisplayFirstEvaluation = ['']
        this.dataDisplaySecondEvaluation = ['']
        this.dataDisplayThirdEvaluation = ['']
        this.quantitiesFirstEvaluation().push(this.fb.group({
          evaluationDomain: element,
          firstRawScore: null,
          firstScaledScore: null
        }))
        this.quantitiesSecondEvaluation().push(this.fb.group({
          evaluationDomain: element,
          secondRawScore: null,
          secondScaledScore: null
        }))
        this.quantitiesThirdEvaluation().push(this.fb.group({
          evaluationDomain: element,
          thirdRawScore: null,
          thirdScaledScore: null
        }))
      })
      
    }
  }

  quantitiesDisability() : FormArray {
    return this.validateForm.get("disability_details") as FormArray
  }

  quantitiesECCD() : FormArray {
    return this.validateForm.get("eccd_details") as FormArray
  }

  quantitiesHealth() : FormArray {
    return this.validateForm.get("health_details") as FormArray
  }

  quantitiesNutritional() : FormArray {
    return this.validateForm.get("nutritional_details") as FormArray
  }

  quantitiesFirstEvaluation() : FormArray {
    return this.validateForm.get("first_evaluation_details") as FormArray
  }

  quantitiesSecondEvaluation() : FormArray {
    return this.validateForm.get("second_evaluation_details") as FormArray
  }

  quantitiesThirdEvaluation() : FormArray {
    return this.validateForm.get("third_evaluation_details") as FormArray
  }

  newQuantityDisability(): FormGroup {
    return this.fb.group({
      disability: [''],
      cause: [''],
    })
  }

  newQuantityECCD(): FormGroup {
    return this.fb.group({
      serviceType: [''],
      service: [''],
      eccdDateFrom: [''],
      eccdDateTo: [''],
    })
  }

  newQuantityHealth(): FormGroup {
    return this.fb.group({
      healthService: [''],
      healthDate: ['']
    })
  }

  newQuantityNutritional(): FormGroup {
    return this.fb.group({
      nutritionalDate: [''],
      nutritionalAge: [''],
      nutritionalHeight: [''],
      nutritionalWeight: [''],
      nutritionalStatus: ['']
    })
  }

  addQuantityDisability() {
    this.quantitiesDisability().push(this.newQuantityDisability());
  }

  addQuantityECCD() {
    this.quantitiesECCD().push(this.newQuantityECCD());
  }

  addQuantityHealth() {
    this.quantitiesHealth().push(this.newQuantityHealth());
  }

  addQuantityNutritional() {
    this.quantitiesNutritional().push(this.newQuantityNutritional());
  }

  removeQuantity(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesDisability().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesDisability().length == 0) {
          this.dataDisplay = [];
        }
      }
    });
  }

  removeQuantityECCD(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesECCD().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesECCD().length == 0) {
          this.dataDisplayEccd = [];
        }
      }
    });
  }

  removeQuantityHealth(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesHealth().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesHealth().length == 0) {
          this.dataDisplayHealth = [];
        }
      }
    });
  }

  removeQuantityNutritional(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesNutritional().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesNutritional().length == 0) {
          this.dataDisplayNutritional = [];
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
  }

  submitForm(): void {
    this.saveLoading = true;

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.citmun_id = Number(this.validateForm.value.citmun_id)
    this.validateForm.value.gender_id = Number(this.validateForm.value.gender_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    this.validateForm.value.total_family_income = this.totalIncome
    
    let s = this.validateForm.value.family_details;
    this.validateForm.value.member_count = Number(s.length)
    for (let i=0; i < s.length; i++) {
      s[i].occupation_income = Number(s[i].occupation_income)
    } 

    if(!this.param) {
      this.saveLoading = true;
      this.validateForm.value.person_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.childInfoService.saveChildInfo(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2] ])
            this.notification.create(
              "success",
              'Successfully Saved',
              'Child Registry has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Child Registry unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.childInfoService.updateChildInfo(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2] ])
          this.notification.create(
            "success",
            'Successfully Updated',
            'Child Registry has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'Child Registry unsuccessfully updated.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    }
  }

  openBrowseDrawer(): void {
    // const drawerRef = this.drawerService.create({
    //   nzTitle: 'Persons List',
    //   nzFooter: 'Footer',
    //   nzPlacement: 'bottom',
    //   nzHeight: 800,
    //   nzContent: PersonsBrowseComponent,
    //   nzContentParams: {
    //     // value: this.value
    //   }
    // });

    // drawerRef.afterClose.subscribe(data => {
    //   console.log("after close", data);
    //   this.dataDisplay = ['']
    //   if (data) {
    //     this.quantities().push(this.fb.group({
    //       full_name: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
    //       relation: "",
    //       age: data.age,
    //       gender_name: data.gender_name,
    //       educational_attainment: data.educational_attainment.toString(),
    //       occupational_skills: data.profession,
    //       person_guid: data.person_guid,
    //       remarks: "",
    //       occupation_income: ""
    //     }))
    //   }
    // });

  }

  incomeAmount: any = []
  costDetails: any = []
  monthlyIncomeAmount: any;
  updateMonthlyIncome(event: any) {
    this.monthlyIncomeAmount = event;
  }

  totalIncome: number = 0.0;
  updateIncome() {
    this.totalIncome = 0
    let s = this.validateForm.value.family_details
    for(let x = 0; x < s.length; x++)
    {
        this.totalIncome += Number(s[x].occupation_income)
    }
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

  checkBreastfeeding(value: any) {
    if (value == true) {
      this.checkedBreastFeeding = true;
      this.hideBreastfeeding = true;
    } else {
      this.checkedBreastFeeding = false;
      this.hideBreastfeeding = false;
      this.validateForm.patchValue({
        kindOfBreastfeeding: null,
        monthsBreasted: null
      })
    }
  }

  checkSupplementary(value: any) {
    if (value == true) {
      this.checkedSupplementaryFeeding = true;
      this.hideSupplementary = true;
    } else {
      this.checkedSupplementaryFeeding = false;
      this.hideSupplementary = false;
      this.validateForm.patchValue({
        supplementaryDays: null
      })
    }
  }

  checkChildDisability(value: any) {
    if (value == true) {
      this.checkedDisability = true;
      this.hideChildDisability = true;
    } else {
      this.checkedDisability = false;
      this.hideChildDisability = false;
      this.validateForm.patchValue({
        childReferred: null
      })
    }
  }

  checkListahanan(value: any) {
    if (value == true) {
      this.checkedListahanan = true;
    } else {
      this.checkedListahanan = false;
    }
  }

  checkPantawid(value: any) {
    if (value == true) {
      this.checkedPantawid = true;
      this.hidePantawid = true;
    } else {
      this.checkedPantawid = false;
      this.hidePantawid = false;
      this.validateForm.patchValue({
        houseHoldID: null
      })
    }
  }

  checkParticipationFee(value: any) {
    if (value == true) {
      this.checkedParticipationFee = true;
      this.hidePaidAmount = true;
    } else {
      this.checkedParticipationFee = false;
      this.hidePaidAmount = false;
      this.validateForm.patchValue({
        paidAmount: null
      })
    }
  }

  checkOthers(value: any) {
    if (value == 'Others') {
      this.hideReasonOthers = true;
    } else {
      this.hideReasonOthers = false;
      this.validateForm.patchValue({
        dropoutSpecifyOthers: null
      })
    }
  }

  addRow() {
    this.dataDisplay = ['']
    this.quantitiesDisability().push(this.fb.group({
      disability: null,
      cause: null
    }))
  }

  addRowECCD() {
    this.dataDisplayEccd = ['']
    this.quantitiesECCD().push(this.fb.group({
      serviceType: null,
      service: null,
      eccdDateFrom: null,
      eccdDateTo: null,
    }))
  }

  addRowHealth() {
    this.dataDisplayHealth= ['']
    this.quantitiesHealth().push(this.fb.group({
      healthService: null,
      healthDate: null
    }))
  }

  addRowNutritional() {
    this.dataDisplayNutritional= ['']
    this.quantitiesNutritional().push(this.fb.group({
      nutritionalDate: null,
      nutritionalAge: null,
      nutritionalHeight: null,
      nutritionalWeight: null,
      nutritionalStatus: null
    }))
  }

  firstRawTotalScore: number = 0.0;
  updateFirstRawScore() {
    this.firstRawTotalScore = 0
    let s = this.validateForm.value.first_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.firstRawTotalScore += Number(s[x].firstRawScore)
    }
  }

  firstScaledTotalScore: number = 0.0;
  updateFirstScaledScore() {
    this.firstScaledTotalScore = 0
    let s = this.validateForm.value.first_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.firstScaledTotalScore += Number(s[x].firstScaledScore)
    }
  }

  secondRawTotalScore: number = 0.0;
  updateSecondRawScore() {
    this.secondRawTotalScore = 0
    let s = this.validateForm.value.second_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.secondRawTotalScore += Number(s[x].secondRawScore)
    }
  }

  secondScaledTotalScore: number = 0.0;
  updateSecondScaledScore() {
    this.secondScaledTotalScore = 0
    let s = this.validateForm.value.second_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.secondScaledTotalScore += Number(s[x].secondScaledScore)
    }
  }

  thirdRawTotalScore: number = 0.0;
  updateThirdRawScore() {
    this.thirdRawTotalScore = 0
    let s = this.validateForm.value.third_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.thirdRawTotalScore += Number(s[x].thirdRawScore)
    }
  }

  thirdScaledTotalScore: number = 0.0;
  updateThirdScaledScore() {
    this.thirdScaledTotalScore = 0
    let s = this.validateForm.value.third_evaluation_details
    for(let x = 0; x < s.length; x++)
    {
        this.thirdScaledTotalScore += Number(s[x].thirdScaledScore)
    }
  }

}
