import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { PwdService } from 'src/core/services/pwd/pwd.service';

@Component({
  selector: 'app-pwd-form',
  templateUrl: './pwd-form.component.html',
  styleUrls: ['./pwd-form.component.scss']
})
export class PwdFormComponent implements OnInit {

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;
  date = new Date();
  dataDisplay:any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  civilStatusDropdown: any = [];
  educationalTypeDropdown: any = [];
  bloodtypeDropdown: any = [];
  occupationListDropdown: any = [];
  disabilityListDropdown: any = [];
  disabilityCauseListDropdown: any = [];
  employmentStatusDropdown: any = [];
  employmentTypeDropdown: any = [];
  employerTypeDropdown: any = [];
  genderDropdown: any;
  mainPersonGuid: any;
  regionList: any;

  path: any;

  incomeAmountDetails = [];
  familymemberDetails: any;
  radioValueOccupation: any;
  radioValueDisability: any;
  radioValueDisabilityCause: any;
  radioValueEmpStatus: any = '1';
  radioValueEmpType: any;
  radioValueEmployerType: any;

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
    private pwdService: PwdService,
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
      birth_date: [null, [Validators.required]],
      place_of_birth: [null],
      gender_id: [null, [Validators.required]],
      educational_attainment: [null],
      civil_status_id: [null, [Validators.required]],
      region_id: [null],
      total_family_income: [null],
      member_count: [null],
      type_of_disability_id: [null, [Validators.required]],
      cause_of_disability_id: [null, [Validators.required]],
      employment_status_id: [null, [Validators.required]],
      employment_type_id: [null],
      employer_type_id: [null],
      occupation_id: [null, [Validators.required]],
      blood_type_id: [null],
      sss_no: [null],
      gsis_no: [null],
      pagibig_no: [null],
      philhealth_no: [null],
      philhealth_membership: [null],
      organization: [null],
      contact_person: [null],
      office_address: [null],
      tel_no: [null],
      telephone_no: [null],
      reporting_unit: [null],
      mobile_no: [null],
      specify_disability: [null],
      occupation_others: [null],
      email_address: [null],
      family_details: this.fb.array([]),
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

    this.pwdService.GetEmploymentStatus().subscribe(data => {
      this.employmentStatusDropdown = data
    })

    this.pwdService.GetEmploymentType().subscribe(data => {
      this.employmentTypeDropdown = data
    })

    this.pwdService.GetEmployerType().subscribe(data => {
      this.employerTypeDropdown = data
    })

    this.pwdService.getCauseOfDisability().subscribe(data => {
      this.disabilityCauseListDropdown = data
    })

    this.pwdService.getDisability().subscribe(data => {
      this.disabilityListDropdown = data
    })

    this.pwdService.getOccupationList().subscribe(data => {
      this.occupationListDropdown = data
    })

    this.pwdService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.personService.getRegion().subscribe(data => {
      this.regionList = data
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

    this.personService.getBloodType().subscribe(data => {
      this.bloodtypeDropdown = data
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = false;
      this.pwdService.getPwdEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        console.log("MAIN DATA", main_data)
        this.validateForm.patchValue({
          province_id: main_data.province_id.toString(),
          barangay_id: main_data.barangay_id.toString(),
          street: main_data.street,
          citmun_id: main_data.citmun_id.toString(),
          prefix: main_data.prefix,
          first_name: main_data.first_name,
          middle_name: main_data.middle_name,
          last_name: main_data.last_name,
          suffix: main_data.suffix,
          birth_date: main_data.birth_date,
          place_of_birth: main_data.place_of_birth,
          gender_id: main_data.gender_id.toString(),
          civil_status_id: main_data.civil_status_id.toString(),
          region_id: main_data.region_id.toString(),
          educational_attainment: main_data.educational_attainment.toString(),
          blood_type_id: main_data.blood_type_id.toString(),
          telephone_no: main_data.telephone_no,
          mobile_no: main_data.phone_no,
          email_address: main_data.email_address,
          employment_status_id: main_data.employment_status_id.toString(),
          employment_type_id: main_data.employment_type_id.toString(),
          employer_type_id: main_data.employer_type_id.toString(),
          occupation_id: main_data.occupation_id.toString(),
          type_of_disability_id: main_data.type_of_disability_id.toString(),
          cause_of_disability_id: main_data.cause_of_disability_id.toString(),
          sss_no: main_data.sss_no,
          gsis_no: main_data.gsis_no,
          pagibig_no: main_data.pagibig_no,
          philhealth_no: main_data.philhealth_no,
          philhealth_membership: main_data.philhealth_membership,
          organization: main_data.organization,
          contact_person: main_data.contact_person,
          office_address: main_data.office_address,
          tel_no: main_data.tel_no,
          form_trans_no: main_data.form_trans_no,
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
                educational_attainment: element.educational_attainment,
                occupational_skills: element.occupational_skills,
                remarks: element.remarks,
                occupation_income: element.occupation_income
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
            profession: data[0].profession,
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
                    educational_attainment: element.educational_attainment,
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
    this.validateForm.value.cause_of_disability_id = Number(this.validateForm.value.cause_of_disability_id)
    this.validateForm.value.employer_type_id = Number(this.validateForm.value.employer_type_id)
    this.validateForm.value.employment_status_id = Number(this.validateForm.value.employment_status_id)
    this.validateForm.value.employment_type_id = Number(this.validateForm.value.employment_type_id)
    this.validateForm.value.occupation_id = Number(this.validateForm.value.occupation_id)
    this.validateForm.value.type_of_disability_id = Number(this.validateForm.value.type_of_disability_id)
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
      this.pwdService.savePwd(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2] ])
            this.notification.create(
              "success",
              'Successfully Saved',
              'PWD Registry has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'PWD Registry unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        if(this.emp_status == 1) {
          console.log("awts", this.radioValueEmpType)
          if (this.radioValueEmpType == undefined || this.radioValueEmpType == null) {
            this.msg.create("error","Please select type of employment");
          } else if (this.radioValueEmployerType == undefined || this.radioValueEmployerType == null) {
            this.msg.create("error","Please select type of employer");
          }
        } else {
          this.msg.create("error","Server Error");
        }
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.pwdService.updatePwd(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2] ])
          this.notification.create(
            "success",
            'Successfully Updated',
            'PWD Registry has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'PWD Registry unsuccessfully updated.'
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
          educational_attainment: data.educational_attainment.toString(),
          occupational_skills: data.profession,
          person_guid: data.person_guid,
          remarks: "",
          occupation_income: ""
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

  hideSelectEmployed: any;
  emp_status: any;
  selectedEmploymentStatus(value: any) {
    if (value == 1) {
      this.hideSelectEmployed = true;
      this.emp_status = 1
    } else {
      this.hideSelectEmployed = false;
      this.emp_status = 2
      this.validateForm.patchValue({
        employment_type_id: null,
        employer_type_id: null
      })
    }
  }

  hideSelectOccupation: any;
  selectedOccupation(value: any) {
    if (value == 13) {
      this.hideSelectOccupation = true;
    } else {
      this.hideSelectOccupation = false;
      this.validateForm.patchValue({
        occupation_others: null
      })
    }
  }

  hideSelectDisability: any;
  selectedDisability(value: any) {
    if (value == 9) {
      this.hideSelectDisability = true;
    } else {
      this.hideSelectDisability = false;
      this.validateForm.patchValue({
        specify_disability: null
      })
    }
  }

}
