import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-osca-registration-form',
  templateUrl: './osca-registration-form.component.html',
  styleUrls: ['./osca-registration-form.component.scss']
})
export class OscaRegistrationFormComponent implements OnInit {

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;
  date = new Date();
  dateMembership = new Date();
  dateElected = new Date();
  dataDisplay:any;
  dataDisplayAssistance: any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  civilStatusDropdown: any = [];
  bloodtypeDropdown: any = [];
  employmentstatusDropdown: any = [];
  classificationDropdown: any = [];
  educationalTypeDropdown: any = [];
  regionList: any;
  genderDropdown: any;
  familymemberDetails: any;
  mainPersonGuid: any;
  defaultRegion: any;
  radioValue: any;
  radioValueClassification: any;
  radioMembershipValue: any;
  livingArrangement: any;
  philhealthMembership: any;
  checkedGSIS: any;
  checkedIP: any;

  file_name: any;
  base_64: any;
  info_file: any;

  path: any;

  incomeAmountDetails = []

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
    private oscaRegistrationService: OscaRegistrationService,
    private familyCompositionService: FamilyCompositionService,
    private personService: PersonService,
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
      region_id: [null, [Validators.required]],
      province_id: [null, [Validators.required]],
      district: [null],
      barangay_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      birth_date: [null, [Validators.required]],
      place_of_birth: [null],
      gender_id: [null, [Validators.required]],
      occupation: [null],
      street: [null],
      form_trans_no: [null],
      educational_attainment: [null],
      classification_id: [null, [Validators.required]],
      civil_status_id: [null, [Validators.required]],
      phone_no: [null],
      telephone_no: [null],
      email_address: [null],
      blood_type_id: [null],
      religion: [null],
      employment_status_id: [null, [Validators.required]],
      tin_no: [null],
      gsis_no: [null],
      gsis_monthly_pension: [null],
      sss_no: [null],
      sss_monthly_pension: [null],
      incase_of_emergency: [null, [Validators.required]],
      contact: [null, [Validators.required]],
      family_details: this.fb.array([]),
      name_of_association: [null, [Validators.required]],
      address_of_association: [null, [Validators.required]],
      date_of_membership: [null, [Validators.required]],
      date_elected: [null],
      living_arrangement_id:[null, [Validators.required]],
      specify_others:[null],
      gsis_pensioner: [null],
      sss_pensioner: [null],
      household_id_no: [null],
      fourps_beneficiary: [null],
      fourps_beneficiary_type: [null],
      philhealth_membership_id: [null, [Validators.required]],
      philhealth_no: [null],
      member_count: [null],
      annual_income: [null, [Validators.required]],
      other_source_of_income: [null]
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
          province_id1: params['province_id'],
          citmun_id1: params['citmun_id'],
          barangay_id1: params['barangay_id'],
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

    this.oscaRegistrationService.getEmploymentStatus().subscribe(data => {
      this.employmentstatusDropdown = data
    })

    this.oscaRegistrationService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.oscaRegistrationService.getClassification().subscribe(data => {
      this.classificationDropdown = data
    })

    this.oscaRegistrationService.getLivingArrangement().subscribe(data => {
      this.livingArrangement = data
    })

    this.oscaRegistrationService.getPHMembership().subscribe(data => {
      this.philhealthMembership = data
    })

    this.personService.getRegion().subscribe(data => {
      this.regionList = data
      // console.log("LIST REG", data)
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
      this.isLoading = true;
      this.oscaRegistrationService.getOscaRegistrationEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        console.log("MAIN DATA", main_data)
        this.validateForm.patchValue({
          region_id: main_data.region_id.toString(),
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
          occupation: main_data.occupation,
          form_trans_no: main_data.form_trans_no,
          civil_status_id: main_data.civil_status_id.toString(),
          phone_no: main_data.phone_no,
          telephone_no: main_data.telephone_no,
          email_address: main_data.email_address,
          blood_type_id: main_data.blood_type_id.toString(),
          religion: main_data.religion,
          educational_attainment: main_data.educational_attainment.toString(),
          employment_status_id: main_data.employment_status_id.toString(),
          classification_id: main_data.classification_id.toString(),
          tin_no: main_data.tin_no,
          incase_of_emergency: main_data.incase_of_emergency,
          contact: main_data.contact,
          annual_income: main_data.annual_income,
          other_source_of_income: main_data.other_source_of_income,
          name_of_association: main_data.name_of_association,
          address_of_association: main_data.address_of_association,
          date_of_membership: main_data.date_of_membership,
          date_elected: main_data.date_elected,
          living_arrangement_id: main_data.living_arrangement_id.toString(),
          philhealth_membership_id: main_data.philhealth_membership_id.toString(),
          philhealth_no: main_data.philhealth_no,
          household_id_no: main_data.household_id_no
        })

        if (main_data.fourps_beneficiary != null) {
          this.validateForm.patchValue({
            fourps_beneficiary: main_data.fourps_beneficiary.toString(),
            fourps_beneficiary_type: main_data.fourps_beneficiary_type.toString(),
          })
        }

        if (main_data.gsis_pensioner != null) {
          this.validateForm.patchValue({
            gsis_pensioner: main_data.gsis_pensioner,
            gsis_no: main_data.gsis_no,
            gsis_monthly_pension: main_data.gsis_monthly_pension,
          })
        }

        if (main_data.sss_pensioner != null) {
          this.validateForm.patchValue({
            sss_pensioner: main_data.sss_pensioner,
            sss_no: main_data.sss_no,
            sss_monthly_pension: main_data.sss_monthly_pension,
          })
        }

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
                occupation_income: element.occupation_income,
                civil_status_name: element.civil_status_name
              })
            );
            
          });
        }
        this.updateIncome()
      })
    } else {
      this.buttonTitle = "Save & Exit"

      this.validateForm.patchValue({
        region_id: "16",
        province_id: "73",
        citmun_id: "40"
      })

      if (this.addParam) {
        this.isLoading = true;
        this.personService.getPersonGUID(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
          console.log("DATA", data)
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
            civil_status_id: data[0].civil_status_id.toString(),
            // profession: data[0].profession,
            // religion: data[0].religion,
            // person_image: data[0].person_image,
            // person_file_name: data[0].person_file_name,
            // person_base64: data[0].person_base64,
            // age: data[0].age
            phone_no: data[0].phone_no,
            telephone_no: data[0].telephone_no,
            email_address: data[0].email_address,
            blood_type_id: data[0].blood_type_id.toString(),
            religion: data[0].religion,
            educational_attainment: data[0].educational_attainment.toString(),
            region_id: data[0].region_id.toString(),
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
                    occupation_income: element.occupation_income,
                    civil_status_name: element.civil_status_name
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
      civil_status_name: [''],
      occupational_skills: [''],
      person_guid: [''],
      main_guid: [''],
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
        this.updateIncome();
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
    this.validateForm.value.monthly_family_income = Number(this.validateForm.value.monthly_family_income)
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    this.validateForm.value.region_id = Number(this.validateForm.value.region_id)
    this.validateForm.value.classification_id = Number(this.validateForm.value.classification_id)
    this.validateForm.value.employment_status_id = Number(this.validateForm.value.employment_status_id)
    this.validateForm.value.gsis_monthly_pension = Number(this.validateForm.value.gsis_monthly_pension)
    this.validateForm.value.sss_monthly_pension = Number(this.validateForm.value.sss_monthly_pension)
    this.validateForm.value.civil_status_id = Number(this.validateForm.value.civil_status_id)
    this.validateForm.value.living_arrangement_id = Number(this.validateForm.value.living_arrangement_id)
    this.validateForm.value.philhealth_membership_id = Number(this.validateForm.value.philhealth_membership_id)
    this.validateForm.value.annual_income = Number(this.validateForm.value.annual_income)
    if (this.validateForm.value.fourps_beneficiary != null) {
      this.validateForm.value.fourps_beneficiary = this.validateForm.value.fourps_beneficiary.toString()
    }
    if (this.validateForm.value.gsis_pensioner != null) {
      this.validateForm.value.gsis_pensioner = this.validateForm.value.gsis_pensioner.toString()
    }
    if (this.validateForm.value.sss_pensioner != null) {
      this.validateForm.value.sss_pensioner = this.validateForm.value.sss_pensioner.toString()
    }

    let s = this.validateForm.value.family_details;
    this.validateForm.value.member_count = Number(s.length)
    for (let i=0; i < s.length; i++) {
      s[i].occupation_income = Number(s[i].occupation_income)
    } 
    
    if(!this.param) {
      this.saveLoading = true;
      this.validateForm.value.person_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.oscaRegistrationService.saveOscaRegistration(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
            this.notification.create(
              "success",
              'Successfully Saved',
              'OSCA Registration has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'OSCA Registration unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.oscaRegistrationService.updateOscaRegistration(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
          this.notification.create(
            "success",
            'Successfully Updated',
            'OSCA Registration has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'OSCA Registration unsuccessfully updated.'
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
          occupational_skills: data.profession,
          person_guid: data.person_guid,
          remarks: "",
          occupation_income: "",
          civil_status_name: data.civil_status_name
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

  browseInCaseofEmergency(): void {
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
      console.log("after close person", data);
      this.validateForm.patchValue({
        incase_of_emergency: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
        contact: data.phone_no
      })
    });
  }

  hidePensioner: any;
  selectedClassification(value: any) {
    if (value == 1) {
      this.hidePensioner = false;
      this.validateForm.patchValue({
        gsis_pensioner: false,
        gsis_no: null,
        gsis_monthly_pension: null,
        tin_no: null,
        sss_pensioner: false,
        sss_no: null,
        sss_monthly_pension: null,
        household_id_no: null
      })
    } else {
      this.hidePensioner = true;
    }
  }

  hideGSIS: any;
  checkedGSISPensioner(value: any) {
    console.log("Pensioner gsis", value)
    if (value == 'true' || value == true) {
      this.hideGSIS = true
    } else {
      this.hideGSIS = false
    }
  }

  hideSSS: any;
  checkedSSSPensioner(value: any) {
    console.log("Pensioner sss", value)
    if (value == 'true' || value == true) {
      this.hideSSS = true
    } else {
      this.hideSSS = false
    }
  }

  hideSpecifyOthers: any;
  selectedLivingArrangement(value: any) {
    console.log("others", value)
    if (value == 5) {
      this.hideSpecifyOthers = true
    } else {
      this.hideSpecifyOthers = false
      this.validateForm.patchValue({
        specify_others: null
      })
    }
  }

  hidePantawid: any;
  selectedPantawid(value: any) {
    console.log("pantawid", value)
    if (value == 'true' || value == true) {
      this.hidePantawid = true
    } else {
      this.hidePantawid = false
      this.validateForm.patchValue({
        fourps_beneficiary_type: null
      })
    }
  }

  hidePhilhealthNo: any;
  selectedPhilhealthMembership(value: any) {
    console.log("philhealthMembership", value)
    if (value == 1) {
      this.hidePhilhealthNo = true
    } else {
      this.hidePhilhealthNo = false
      this.validateForm.patchValue({
        philhealth_no: null
      })
    }
  }

}
