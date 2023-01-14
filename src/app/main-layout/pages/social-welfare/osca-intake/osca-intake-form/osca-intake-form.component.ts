import { DatePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerPlacement, NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { GeneralIntakeService } from 'src/core/services/general-intake/general-intake.service';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-osca-intake-form',
  templateUrl: './osca-intake-form.component.html',
  styleUrls: ['./osca-intake-form.component.scss']
})
export class OscaIntakeFormComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }

  loading = false;
  avatarUrl?: string;
  isLoading = false;
  saveLoading = false;
  param: any;
  addParam: any;
  buttonTitle: any;
  visible = false;

  validateForm!: FormGroup;
  date = new Date();
  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  disabilityDropdown: any = [];

  checkedListahanan: any;
  checkedPantawid: any;
  checkedSCOrganization: any;
  checkedIP: any;
  checkedOther: any;
  radioValue: any;
  checkedPensioner: any;
  checkedPermanentSource: any;
  checkedFamilySupport: any;
  checkedSourceGSIS: any;
  checkedSourceSSS: any;
  checkedSourceAFPSLAI: any = false;
  checkedSourceOthers: any = false;
  checkedWithMaintenance: any = false;

  file_name: any;
  base_64: any;
  info_file: any;

  placement: NzDrawerPlacement = 'bottom';
  dataDisplay:any;
  mainPersonGuid: any;
  memberDetails: any
  educationalTypeDropdown: any;
  livingArrangement: any;

  incomeAmountDetails = []

  incomeAmount: any = []
  monthlyIncomeAmount: any;

  totalIncome: number = 0.0;
  addMemberDetails: any;
  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private oscaIntakeService: OscaIntakeService,
    private generalIntakeService: GeneralIntakeService,
    private personService: PersonService,
    private oscaRegistrationService: OscaRegistrationService,
    public datepipe: DatePipe,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService
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
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      province_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      street: [null],
      birth_date: [null, [Validators.required]],
      gender_id: [null, [Validators.required]],
      place_of_birth: [null],
      civil_status_id: [null],
      religion: [null],
      age: [null],
      educational_attainment: [null],
      occupation: [null],
      citizenship: [null],
      total_family_income: [null],
      member_count: [null],
      form_trans_no: [null],
      details: this.fb.array([]),
      fathers_name: [null],
      mothers_name: [null],
      listahanan: [null],
      fourps_beneficiary: [null],
      senior_citizen_organization: [null],
      ip: [null],
      other: [null],
      osca_no: [null],
      tin_no: [null],
      gsis_no: [null],
      sss_no: [null],
      philhealth_no: [null],
      others_no: [null],
      living_arrangement_id: [null, [Validators.required]],
      specify_listahanan: [null],
      specify_ip: [null],
      specify_other: [null],
      pensioner: [null],
      pensioner_amount: [null],
      source_gsis: [null],
      source_sss: [null],
      source_afpslai: [null],
      source_others: [null],
      specify_other_source: [null],
      permanent_source: [null],
      what_source: [null],
      family_support: [null],
      support_type: [null],
      how_much: [null],
      how_often: [null],
      in_kind: [null],
      condition: [null],
      with_maintenance: [null],
      specify_maintenance: [null],
      assessment_description: [null],
      specify_living_others: [null]
    });

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
      }
    })

    this.oscaRegistrationService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.oscaRegistrationService.getLivingArrangement().subscribe(data => {
      this.livingArrangement = data
    })

    this.generalIntakeService.getGeneralIntakeDisability().subscribe(data=> {
      this.disabilityDropdown = data;
    })

    this.personService.getDropdownprovince().subscribe(data => {
      this.provinceDropdown = data
      this.personService.getDropdownValues().subscribe(data => {
        this.genderDropdown = data[0].gender
        this.civilStatusDropdown = data[1].civil_status
        this.personService.getDropdowncityMun(73).subscribe(data => {
          this.citymunDropdown = data
          this.personService.getBarangay(40).subscribe(data => {
            this.barangayDropdown = data
            this.isLoading = false
          })
        })
      })
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.oscaIntakeService.getOscaIntakeEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.osca_registration_guid;
        console.log("AHAK OY", main_data)
        this.validateForm.patchValue({
          fourps_member: main_data.fourps_member,
          ips: main_data.ips,
          house_ownership: main_data.house_ownership,
          property_cost: main_data.property_cost,
          contact_no: main_data.contact_no,
          secondary_contact_no: main_data.secondary_contact_no,
          educational_attainment: main_data.educational_attainment,
          occupation: main_data.profession,
          prefix: main_data.prefix,
          first_name: main_data.first_name,
          middle_name: main_data.middle_name,
          last_name: main_data.last_name,
          suffix: main_data.suffix,
          province_id: main_data?.province_id?.toString(),
          citmun_id: main_data?.citmun_id?.toString(),
          barangay_id: main_data?.barangay_id?.toString(),
          street: main_data.street,
          birth_date: main_data.birth_date,
          citizenship: main_data.citizenship,
          gender_id: main_data?.gender_id?.toString(),
          place_of_birth: main_data.place_of_birth,
          civil_status_id: main_data?.civil_status_id?.toString(),
          profession: main_data.profession,
          religion: main_data.religion,
          person_image: main_data.person_image,
          person_file_name: main_data.person_file_name,
          person_base64: main_data.person_base64,
          age: main_data.age,
          form_trans_no: main_data.form_trans_no,
          fathers_name: main_data.fathers_name,
          mothers_name: main_data.mothers_name,
          living_arrangement_id: main_data.living_arrangement_id.toString(),
          listahanan: main_data.listahanan,
          fourps_beneficiary: main_data.fourps_beneficiary,
          senior_citizen_organization: main_data.fourps_beneficiary,
          ip: main_data.ip,
          other: main_data.other,
          specify_listahanan: main_data.specify_listahanan,
          specify_ip: main_data.specify_ip,
          specify_other: main_data.specify_other,
          specify_living_others: main_data.specify_living_others,
          osca_no: main_data.osca_no,
          tin_no: main_data.tin_no,
          gsis_no: main_data.gsis_no,
          sss_no: main_data.sss_no,
          philhealth_no: main_data.philhealth_no,
          others_no: main_data.others_no,
          pensioner: main_data.pensioner,
          pensioner_amount: main_data.pensioner_amount,
          source_gsis: main_data.source_gsis,
          source_sss: main_data.source_sss,
          source_afpslai: main_data.source_afpslai,
          source_others: main_data.source_others,
          specify_other_source: main_data.specify_other_source,
          permanent_source: main_data.permanent_source,
          family_support: main_data.family_support,
          what_source: main_data.what_source,
          support_type: main_data.support_type,
          how_much: main_data.how_much,
          how_often: main_data.how_often,
          in_kind: main_data.in_kind,
          condition: main_data.condition,
          with_maintenance: main_data.with_maintenance,
          specify_maintenance: main_data.specify_maintenance,
          assessment_description: main_data.assessment_description
        })

        if (main_data.person_image) {
          this.avatarUrl = "data:image/png;base64," + main_data.person_image;
        }

        this.memberDetails = main_data.details;
        if(this.memberDetails != null) {
          this.dataDisplay = ['']
          this.memberDetails.forEach((element: any) => {
            this.quantities().push(
              this.fb.group({
                full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                age: element.age,
                civil_status_name: element.civil_status_name,
                relation: element.relation,
                educational_attainment: element.educational_attainment,
                occupational_skills: element.occupation,
                occupation_income: element.occupation_income,
                person_guid: element.person_guid,
                status: element.status
              })
            );
            
          });
        }
        this.updateIncome()
      })
      
    } else {
      this.buttonTitle = "Save & Exit"

      if (this.addParam) {
        this.isLoading = true;
        this.oscaRegistrationService.getOscaRegistrationEdit(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
          console.log("BUSHEET MADAFAKA", data)
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
            citizenship: data.citizenship,
            height: data.height,
            weight: data.weight,
            gender_id: data.gender_id.toString(),
            place_of_birth: data.place_of_birth,
            tin: data.tin,
            civil_status_id: data.civil_status_id.toString(),
            profession: data.profession,
            religion: data.religion,
            person_image: data.person_image,
            person_file_name: data.person_file_name,
            person_base64: data.person_base64,
            age: data.age,
            educational_attainment: data.educational_attainment.toString(),
            occupation: data.profession,
            monthly_income: data.monthly_income,
            house_occupancy: data.house_occupancy,
            living_arrangement_id: data.living_arrangement_id.toString(),
            tin_no: data.tin_no,
            gsis_no: data.gsis_no,
            sss_no: data.sss_no,
            philhealth_no: data.philhealth_no,
            source_gsis: data.gsis_pensioner,
            source_sss: data.sss_pensioner
          })

          if (data.classification_id == 2) {
            this.validateForm.patchValue({
              pensioner: "true"
            })
          }

          if (data.fourps_beneficiary == true || data.fourps_beneficiary == 'true') {
            this.validateForm.patchValue({
              fourps_beneficiary: data.fourps_beneficiary.toString()
            })
          }

          if (data.person_image) {
            this.avatarUrl = "data:image/png;base64," + data.person_image;
          }

          this.addMemberDetails = data.family_details;
          if(this.addMemberDetails != null) {
            this.dataDisplay = ['']
            this.addMemberDetails.forEach((element: any) => {
              this.quantities().push(
                this.fb.group({
                  full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                  age: element.age,
                  civil_status_name: element.civil_status_name,
                  relation: element.relation,
                  educational_attainment: element.educational_attainment,
                  occupational_skills: element.occupational_skills,
                  occupation_income: element.occupation_income,
                  person_guid: element.person_guid,
                  status: element.status
                })
              );
              
            });
          }
          this.updateIncome()
          // console.log("ANIMAL", data)
        })
      }
    }
  }

  quantities() : FormArray {
    return this.validateForm.get("details") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      full_name: [''],
      age: [''],
      civil_status:[''],
      relation: [''],
      educational_attainment: [''],
      occupation: [''],
      occupation_income: [''],
      person_guid: [''],
      main_guid: [''],
      status: ['']
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
    this.router.navigate(['/main/social-welfare/osca-intake'])
  }

  submitForm(): void {
    this.saveLoading = true;
    
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    // this.validateForm.value.birth_date = this.validateForm.value.birth_date.toString()
    this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
    this.validateForm.value.citmun_id = Number(this.validateForm.value.citmun_id)
    this.validateForm.value.civil_status_id = Number(this.validateForm.value.civil_status_id)
    this.validateForm.value.gender_id = Number(this.validateForm.value.gender_id)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    
    this.validateForm.value.how_much = Number(this.validateForm.value.how_much)
    this.validateForm.value.living_arrangement_id = Number(this.validateForm.value.living_arrangement_id)
    this.validateForm.value.pensioner_amount = Number(this.validateForm.value.pensioner_amount)
    this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
    if (this.validateForm.value.listahanan != null) {
      this.validateForm.value.listahanan = this.validateForm.value.listahanan.toString()
    }
    if (this.validateForm.value.family_support != null) {
      this.validateForm.value.family_support = this.validateForm.value.family_support.toString()
    }
    if (this.validateForm.value.fourps_beneficiary != null) {
      this.validateForm.value.fourps_beneficiary = this.validateForm.value.fourps_beneficiary.toString()
    }
    if (this.validateForm.value.ip != null) {
      this.validateForm.value.ip = this.validateForm.value.ip.toString()
    }
    if (this.validateForm.value.other != null) {
      this.validateForm.value.other = this.validateForm.value.other.toString()
    }
    if (this.validateForm.value.pensioner != null) {
      this.validateForm.value.pensioner = this.validateForm.value.pensioner.toString()
    }
    if (this.validateForm.value.permanent_source != null) {
      this.validateForm.value.permanent_source = this.validateForm.value.permanent_source.toString()
    }
    if (this.validateForm.value.senior_citizen_organization != null) {
      this.validateForm.value.senior_citizen_organization = this.validateForm.value.senior_citizen_organization.toString()
    }
    if (this.validateForm.value.source_afpslai != null) {
      this.validateForm.value.source_afpslai = this.validateForm.value.source_afpslai.toString()
    }
    if (this.validateForm.value.source_gsis != null) {
      this.validateForm.value.source_gsis = this.validateForm.value.source_gsis.toString()
    }
    if (this.validateForm.value.source_others != null) {
      this.validateForm.value.source_others = this.validateForm.value.source_others.toString()
    }
    if (this.validateForm.value.source_sss != null) {
      this.validateForm.value.source_sss = this.validateForm.value.source_sss.toString()
    }
    if (this.validateForm.value.with_maintenance != null) {
      this.validateForm.value.with_maintenance = this.validateForm.value.with_maintenance.toString()
    }
    
    this.validateForm.value.total_family_income = this.totalIncome
    
    let s = this.validateForm.value.details;
    this.validateForm.value.member_count = Number(s.length)
    for (let i=0; i < s.length; i++) {
      s[i].occupation_income = Number(s[i].occupation_income)
    } 

    if(this.info_file) {
      this.validateForm.value.person_image = this.avatarUrl
      this.validateForm.value.person_file_name = this.file_name
      this.validateForm.value.person_base64 = this.base_64
    }

    if(!this.param) {
      this.saveLoading = true;
      this.validateForm.value.osca_registration_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.oscaIntakeService.saveOscaIntake(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
            this.notification.create(
              "success",
              'Successfully Saved',
              'OSCA Intake Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'OSCA Intake Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.osca_registration_guid = this.mainPersonGuid
      this.oscaIntakeService.updateOscaIntake(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
          this.notification.create(
            "success",
            'Successfully Updated',
            'OSCA Intake Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'OSCA Intake Setup unsuccessfully updated.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    }
  }

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng );
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    
    this.getBase64(info.file!.originFileObj!, (img: string) => {
            this.loading = false;
            this.avatarUrl = img;
            this.file_name = info.file!.name
            this.base_64 = info.file!.thumbUrl
            this.info_file = info
          });
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

  updateMonthlyIncome(event: any) {
    this.monthlyIncomeAmount = event;
  }
  
  updateIncome() {
    this.totalIncome = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.totalIncome += Number(s[x].occupation_income)
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
        specify_living_others: null
      })
    }
  }

  specifyListahananHide: any;
  checkedListahananBox(value: any) {
    console.log("Listahanan", value)
    if (value == 'true' || value == true) {
      this.specifyListahananHide = true
    } else {
      this.specifyListahananHide = false
      this.validateForm.patchValue({
        specify_listahanan: null
      })
    }
  }

  specifyIPHide: any;
  checkedIPBox(value: any) {
    console.log("IP", value)
    if (value == 'true' || value == true) {
      this.specifyIPHide = true
    } else {
      this.specifyIPHide = false
      this.validateForm.patchValue({
        specify_ip: null
      })
    }
  }

  specifyOtherHide: any;
  checkedOtherBox(value: any) {
    console.log("IP", value)
    if (value == 'true' || value == true) {
      this.specifyOtherHide = true
    } else {
      this.specifyOtherHide = false
      this.validateForm.patchValue({
        specify_other: null
      })
    }
  }

  howmuchHide: any;
  checkedPensionerBox(value: any) {
    console.log("how much", value)
    if (value == 'true' || value == true) {
      this.howmuchHide = true
    } else {
      this.howmuchHide = false
      this.validateForm.patchValue({
        pensioner_amount: 0
      })
    }
  }

  specifyOtherSourceHide: any;
  checkOtherSourceBox(value: any) {
    console.log("how much", value)
    if (value == 'true' || value == true) {
      this.specifyOtherSourceHide = true
    } else {
      this.specifyOtherSourceHide = false
      this.validateForm.patchValue({
        specify_other_source: null
      })
    }
  }

  specifySourceIncomeHide: any;
  checkedSourceIncome(value: any) {
    console.log("permanent source of income", value)
    if (value == 'true' || value == true) {
      this.specifySourceIncomeHide = true
    } else {
      this.specifySourceIncomeHide = false
      this.validateForm.patchValue({
        what_source: null
      })
    }
  }

  familySupportHide: any;
  checkedFamilySupportBox(value: any) {
    console.log("permanent source of income", value)
    if (value == 'true' || value == true) {
      this.familySupportHide = true
    } else {
      this.familySupportHide = false
      this.validateForm.patchValue({
        support_type: null,
        how_much: null,
        how_often: null,
        in_kind: null
      })
    }
  }

  withMaintenanceHide: any;
  checkedWithMaintenanceBox(value: any) {
    console.log("permanent source of income", value)
    if (value == 'true' || value == true) {
      this.withMaintenanceHide = true
    } else {
      this.withMaintenanceHide = false
      this.validateForm.patchValue({
        specify_maintenance: null
      })
    }
  }

}
