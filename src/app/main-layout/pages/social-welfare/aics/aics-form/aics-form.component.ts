import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { AicsService } from 'src/core/services/aics/aics.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-aics-form',
  templateUrl: './aics-form.component.html',
  styleUrls: ['./aics-form.component.scss']
})
export class AicsFormComponent implements OnInit {

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;
  date = new Date();
  dateRecommended = new Date();
  dataDisplay:any;
  dataDisplayCasualties: any;
  educationalTypeDropdown: any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  application: any = [];
  applicationType: any = [];
  recommendations: any = [];
  genderDropdown: any;
  mainPersonGuid: any;

  path: any;

  incomeAmountDetails = []
  familymemberDetails: any;
  casualtiesDetails: any;

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
    private aicsService: AicsService,
    private familyCompositionService: FamilyCompositionService,
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
      province_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      street: [null],
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      fourps_beneficiary: [null, [Validators.required]],
      ips: [null, [Validators.required]],
      type_of_ethnicity: [null],
      birth_date: [null, [Validators.required]],
      place_of_birth: [null],
      gender_id: [null, [Validators.required]],
      occupation: [null],
      monthly_family_income: [null],
      house_ownership: [null],
      recommendation_id: [null, [Validators.required]],
      application_id: [null, [Validators.required]],
      application_type_id: [null, [Validators.required]],
      date_recommended: [null, [Validators.required]],
      educational_attainment: [null],
      total_family_income: [null],
      member_count: [null],
      family_details: this.fb.array([]),
      casualties_details: this.fb.array([]),
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

    this.aicsService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.aicsService.getApplication().subscribe(data => {
      this.application = data
    })

    this.aicsService.getApplicationType().subscribe(data => {
      this.applicationType = data
    })

    this.aicsService.getRecommendations().subscribe(data => {
      this.recommendations = data
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
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.aicsService.getAicsEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        console.log("MAIN DATA", main_data)
        this.validateForm.patchValue({
          province_id: main_data.province_id.toString(),
          barangay_id: main_data.barangay_id.toString(),
          street: main_data.family_head_street,
          citmun_id: main_data.citmun_id.toString(),
          prefix: main_data.prefix,
          first_name: main_data.first_name,
          middle_name: main_data.middle_name,
          last_name: main_data.last_name,
          suffix: main_data.suffix,
          fourps_beneficiary: main_data.fourps_beneficiary.toString(),
          ips: main_data.ips.toString(),
          type_of_ethnicity: main_data.type_of_ethnicity,
          birth_date: main_data.birth_date,
          place_of_birth: main_data.place_of_birth,
          gender_id: main_data.gender_id.toString(),
          occupation: main_data.occupation,
          monthly_family_income: main_data.monthly_family_income,
          house_ownership: main_data.house_ownership.toString(),
          form_trans_no: main_data.form_trans_no,
          educational_attainment: main_data.educational_attainment.toString(),
          application_id: main_data.application_id.toString(),
          recommendation_id: main_data.recommendation_id.toString(),
          application_type_id: main_data.application_type_id.toString(),
          date_recommended: main_data.date_recommended
        })

        this.familymemberDetails = main_data.family_details;
        if(this.familymemberDetails != null) {
          this.dataDisplay = ['']
          this.familymemberDetails.forEach((element: any) => {
            this.quantities().push(
              this.fb.group({
                full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                person_guid: element.person_guid,
                relation: element.relation,
                age: element.age,
                gender_name: element.gender_name,
                educational_attainment: element.educational_attainment.toString(),
                occupational_skills: element.occupational_skills,
                remarks: element.remarks,
                occupation_income: element.occupation_income
              })
            );
            
          });
        }

        this.casualtiesDetails = main_data.casualties_details;
        if(this.casualtiesDetails != null) {
          this.dataDisplay = ['']
          this.casualtiesDetails.forEach((element: any) => {
            this.quantitiesCasualties().push(
              this.fb.group({
                full_name_casualties: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                person_guid: element.person_guid,
                age: element.age
              })
            );
            
          });
        }

        this.updateIncome()
      })
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
            // citizenship: data[0].citizenship,
            // height: data[0].height,
            // weight: data[0].weight,
            gender_id: data[0].gender_id.toString(),
            place_of_birth: data[0].place_of_birth,
            // tin: data[0].tin,
            // civil_status_id: data[0].civil_status_id.toString(),
            // profession: data[0].profession,
            // religion: data[0].religion,
            // person_image: data[0].person_image,
            // person_file_name: data[0].person_file_name,
            // person_base64: data[0].person_base64,
            // age: data[0].age
          })

        })

        this.familyCompositionService.getFamilyCompositionDetailsWithPersonGUID(this.addParam).subscribe(data => {
          console.log("Add  Param", data)  
          this.familymemberDetails = data;
            if(this.familymemberDetails != null) {
              this.dataDisplay = ['']
              this.familymemberDetails.forEach((element: any) => {
                this.quantities().push(
                  this.fb.group({
                    full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                    person_guid: element.person_guid,
                    relation: element.relation,
                    age: element.age,
                    gender_name: element.gender_name,
                    educational_attainment: element.educational_attainment.toString(),
                    occupational_skills: element.occupational_skills,
                    remarks: element.remarks,
                    occupation_income: element.occupation_income
                  })
                );
              });
            }
            this.updateIncome()
        })

      }
    }

  }

  quantities() : FormArray {
    return this.validateForm.get("family_details") as FormArray
  }

  quantitiesCasualties() : FormArray {
    return this.validateForm.get("casualties_details") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      full_name: [''],
      relation: [''],
      age: [''],
      gender_name: [''],
      educational_attainment: [''],
      occupational_skills: [''],
      person_guid: [''],
      main_guid: [''],
      remarks: [''],
      occupation_income: ['']
    })
  }

  newQuantityCasualties(): FormGroup {
    return this.fb.group({
      full_name: [''],
      age: [''],
      person_guid: [''],
      main_guid: ['']
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantities().removeAt(i);
        // this.updateIncome();
        if (this.quantities().length == 0) {
          this.dataDisplay = [];
        }
      }
    });
  }

  removeQuantityCasualties(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesCasualties().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesCasualties().length == 0) {
          this.dataDisplayCasualties = [];
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/main/social-welfare/aics-registration'])
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
    this.validateForm.value.monthly_family_income = Number(this.validateForm.value.monthly_family_income)
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    this.validateForm.value.application_id = Number(this.validateForm.value.application_id)
    this.validateForm.value.application_type_id = Number(this.validateForm.value.application_type_id)
    this.validateForm.value.recommendation_id = Number(this.validateForm.value.recommendation_id)
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
      this.aicsService.saveAics(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/aics-registration'])
            this.notification.create(
              "success",
              'Successfully Saved',
              'AICS Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'AICS Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.aicsService.updateAics(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/aics-registration'])
          this.notification.create(
            "success",
            'Successfully Updated',
            'AICS Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'AICS Setup unsuccessfully updated.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    }
  }

  openBrowseDrawer(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Persons List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log("after close", data);
      this.dataDisplay = ['']
      if (data) {
        this.quantities().push(this.fb.group({
          full_name: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
          relation: "",
          age: data.age,
          gender_name: data.gender_name,
          educational_attainment: "",
          occupational_skills: "",
          person_guid: data.person_guid,
          remarks: "",
          occupation_income: ""
        }))
      }
    });

  }

  openBrowseDrawerCasualties(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Persons List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log("after close", data);
      this.dataDisplayCasualties = ['']
      if (data) {
        this.quantitiesCasualties().push(this.fb.group({
          full_name: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
          age: data.age,
          person_guid: data.person_guid
        }))
      }
    });

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

}
