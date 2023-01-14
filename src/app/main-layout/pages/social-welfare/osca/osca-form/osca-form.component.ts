import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { OscaService } from 'src/core/services/osca/osca.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-osca-form',
  templateUrl: './osca-form.component.html',
  styleUrls: ['./osca-form.component.scss']
})
export class OscaFormComponent implements OnInit {

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
  educationalTypeDropdown: any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  philhealthMembership: any = [];

  genderDropdown: any;
  mainPersonGuid: any;

  path: any;

  incomeAmountDetails = []
  familymemberDetails: any;
  civilStatusDropdown: any;
  radioValue: any;
  radioMembershipValue: any;
  radioBeneficiaryTypeValue: any;
  checked = false;
  checkedSSSPensioner = false;
  checkedGSISPensioner = false;
  checkedPVAOPensioner = false;
  checkedPantawidBeneficiary = false;

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
    private oscaService: OscaService,
    private personService: PersonService,
    private oscaRegistrationService: OscaRegistrationService
  ) { 
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.addParam = params['osca_registration_guid']
    });
  }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({ 
      osca_registration_guid: [null],
      province_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      street: [null],
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      // application_type: [null, [Validators.required]],
      educational_attainment: [null],
      civil_status_id: [null],
      annual_income: [null],
      other_source_of_income: [null],
      birth_date: [null],
      place_of_birth: [null],
      gender_id: [null],
      occupation: [null],
      name_of_association: [null, [Validators.required]],
      association_address: [null, [Validators.required]],
      date_of_membership: [null, [Validators.required]],
      date_elected: [null],
      ips: [null],
      ip_name: [null],
      sss_pensioner: [null],
      sss_monthly_pension: [null],
      gsis_pensioner: [null],
      gsis_monthly_pension: [null],
      pvao_pensioner: [null],
      pvao_monthly_pension: [null],
      philhealth_membership_id: [null],
      fourps_beneficiary: [null],
      household_id_no: [null],
      pantawid_beneficiary_type: [null],
      family_details: this.fb.array([]),
      form_trans_no: [null],
      // house_ownership: [null, [Validators.required]],
      // monthly_income: [null, [Validators.required]],
    })

    this.personService.getDropdownValues().subscribe(data => {
      this.civilStatusDropdown = data[1].civil_status
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
    this.oscaService.getPHMembership().subscribe(data => {
      this.philhealthMembership = data
    })
    this.oscaService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
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

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.oscaService.getOscaEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.osca_registration_guid;
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
          annual_income: main_data.annual_income,
          other_source_of_income: main_data.other_source_of_income,
          fourps_beneficiary: main_data.fourps_beneficiary,
          ips: main_data.ips,
          application_type: main_data.application_type,
          name_of_association: main_data.name_of_association,
          association_address: main_data.address_of_association,
          birth_date: main_data.birth_date,
          place_of_birth: main_data.place_of_birth,
          gender_id: main_data.gender_id.toString(),
          civil_status_id: main_data.civil_status_id.toString(),
          occupation: main_data.profession,
          date_of_membership: main_data.date_of_membership,
          date_elected: main_data.date_elected,
          sss_pensioner: main_data.sss_pensioner,
          sss_monthly_pension: main_data.sss_monthly_pension,
          gsis_pensioner: main_data.gsis_pensioner,
          gsis_monthly_pension: main_data.gsis_monthly_pension,
          pvao_pensioner: main_data.pvao_pensioner,
          pvao_monthly_pension: main_data.gsis_monthly_pension,
          form_trans_no: main_data.form_trans_no,
          educational_attainment: main_data.educational_attainment,
          ip_name: main_data.ip_name,
          household_id_no: main_data.household_id_no,
          philhealth_membership_id: main_data.philhealth_membership_id.toString(),
          house_ownership: main_data.house_ownership,
          monthly_income: main_data.monthly_income
        })

        if (main_data.pantawid_beneficiary_type) {
          this.validateForm.patchValue({
            pantawid_beneficiary_type: main_data.pantawid_beneficiary_type.toString()
          })
          this.radioBeneficiaryTypeValue = main_data.pantawid_beneficiary_type
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
                occupation_income: element.occupation_income
              })
            );
            
          });
        }
        this.ipChecked(main_data.ips)
        this.sssChecked(main_data.sss_pensioner)
        this.gsisChecked(main_data.gsis_pensioner)
        this.pvaoChecked(main_data.pvao_pensioner)
        this.pantawidChecked(main_data.fourps_beneficiary)
        this.updateIncome()
      })
    } else {
      this.buttonTitle = "Save & Exit"

      this.radioValue = 'New';
      this.radioMembershipValue = '1'
      this.radioBeneficiaryTypeValue = 'Member'
      this.validateForm.patchValue({
        province_id: "73",
        citmun_id: "40"
      })

      if (this.addParam) {
        this.isLoading = true;
        this.oscaRegistrationService.getOscaRegistrationEdit(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
          console.log("OKAYS", data)
          this.validateForm.patchValue({
            prefix: data.prefix,
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name: data.last_name,
            suffix: data.suffix,
            province_id: data.province_id.toString(),
            citmun_id: data.citmun_id.toString(),
            barangay_id: data.barangay_id.toString(),
            street: data.street,
            birth_date: data.birth_date,
            gender_id: data.gender_id.toString(),
            place_of_birth: data.place_of_birth,
            civil_status_id: data.civil_status_id.toString(),
            annual_income: data.annual_income,
            other_source_of_income: data.other_source_of_income,
            occupation: data.profession,
            educational_attainment: data.educational_attainment.toString(),
            name_of_association: data.name_of_association,
            association_address: data.address_of_association,
            date_of_membership: data.date_of_membership,
            date_elected: data.date_elected,
            gsis_monthly_pension: data.gsis_monthly_pension,
            sss_monthly_pension: data.sss_monthly_pension,
            philhealth_membership_id: data.philhealth_membership_id.toString(),
            pantawid_beneficiary_type: data.fourps_beneficiary_type,
            household_id_no: data.household_id_no
          })
          // console.log("type", data.fourps_beneficiary_type)
          if (data.fourps_beneficiary_type) {
            this.validateForm.patchValue({
              pantawid_beneficiary_type: data.fourps_beneficiary_type.toString()
            })
            this.radioBeneficiaryTypeValue = data.fourps_beneficiary_type
          }

          this.familymemberDetails = data.family_details;
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

          this.sssChecked(data.sss_pensioner)
          this.gsisChecked(data.gsis_pensioner)
          this.pantawidChecked(data.fourps_beneficiary)
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
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    this.validateForm.value.annual_income = Number(this.validateForm.value.annual_income)
    this.validateForm.value.gsis_monthly_pension = Number(this.validateForm.value.gsis_monthly_pension)
    this.validateForm.value.philhealth_membership_id = Number(this.validateForm.value.philhealth_membership_id)
    this.validateForm.value.pvao_monthly_pension = Number(this.validateForm.value.pvao_monthly_pension)
    this.validateForm.value.sss_monthly_pension = Number(this.validateForm.value.sss_monthly_pension)
    this.validateForm.value.ips = this.validateForm.value.ips.toString()
    this.validateForm.value.fourps_beneficiary = this.validateForm.value.fourps_beneficiary.toString()
    this.validateForm.value.sss_pensioner = this.validateForm.value.sss_pensioner.toString()
    this.validateForm.value.gsis_pensioner = this.validateForm.value.gsis_pensioner.toString()
    this.validateForm.value.pvao_pensioner = this.validateForm.value.pvao_pensioner.toString()
    this.validateForm.value.monthly_income = Number(this.validateForm.value.monthly_income)
    this.validateForm.value.total_family_income = this.totalIncome

    if (this.validateForm.value.household_id_no == null) {
      this.validateForm.value.household_id_no = 0;
    }

    // this.validateForm.value.date_of_membership = this.validateForm.value.date_of_membership
    // this.validateForm.value.date_elected = this.validateForm.value.date_elected
    
    let s = this.validateForm.value.family_details;
    this.validateForm.value.member_count = Number(s.length)
    for (let i=0; i < s.length; i++) {
      s[i].occupation_income = Number(s[i].occupation_income)
    } 

    if(!this.param) {
      this.saveLoading = true;
      this.validateForm.value.osca_registration_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.oscaService.saveOsca(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
            this.notification.create(
              "success",
              'Successfully Saved',
              'OSCA ID Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'OSCA ID Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.osca_registration_guid = this.mainPersonGuid
      this.oscaService.updateOsca(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
          this.notification.create(
            "success",
            'Successfully Updated',
            'OSCA ID Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'OSCA ID Setup unsuccessfully updated.'
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

  ipChecked(value: any) {
    if (value == true || value == 'true') {
      this.checked = true;
    } else {
      this.checked = false;
      this.validateForm.patchValue({
        ip_name: ''
      })
    }
  }

  sssChecked(value: any) {
    if (value == true || value == 'true') {
      this.checkedSSSPensioner = true;
    } else {
      this.checkedSSSPensioner = false;
      this.validateForm.patchValue({
        sss_monthly_pension: ''
      })
    }
  }

  gsisChecked(value: any) {
    if (value == true || value == 'true') {
      this.checkedGSISPensioner = true;
    } else {
      this.checkedGSISPensioner = false;
      this.validateForm.patchValue({
        gsis_monthly_pension: ''
      })
    }
  }

  pvaoChecked(value: any) {
    if (value == true || value == 'true') {
      this.checkedPVAOPensioner = true;
    } else {
      this.checkedPVAOPensioner = false;
      this.validateForm.patchValue({
        pvao_monthly_pension: ''
      })
    }
  }

  pantawidChecked(value: any) {
    if (value == true || value == 'true') {
      this.checkedPantawidBeneficiary = true;
    } else {
      this.checkedPantawidBeneficiary = false;
      this.validateForm.patchValue({
        pantawid_beneficiary_type: ''
      })
      this.radioBeneficiaryTypeValue = ''
    }
  }

}
