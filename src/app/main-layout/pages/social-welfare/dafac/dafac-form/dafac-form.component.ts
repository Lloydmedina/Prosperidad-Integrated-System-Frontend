import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { EvacuationBrowseComponent } from 'src/app/main-layout/template/evacuation-browse/evacuation-browse.component';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { DafacService } from 'src/core/services/dafac/dafac.service';
import { EvacuationCenterService } from 'src/core/services/evacuation-center/evacuation-center.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-dafac-form',
  templateUrl: './dafac-form.component.html',
  styleUrls: ['./dafac-form.component.scss']
})
export class DafacFormComponent implements OnInit {

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
  dataDisplayAssistance: any;
  educationalTypeDropdown: any;

  validateForm!: FormGroup;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  regionList: any;
  genderDropdown: any;
  familymemberDetails: any;
  familyassistanceDetails: any;
  mainPersonGuid: any;

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
    private dafacService: DafacService,
    private personService: PersonService,
    private familyCompositionService: FamilyCompositionService,
    private evacuationCenterService: EvacuationCenterService
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
      district: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      evacuation_center_guid: [null, [Validators.required]],
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      name_extension: [null],
      fourps_beneficiary: [null, [Validators.required]],
      ips: [null, [Validators.required]],
      type_of_ethnicity: [null],
      birth_date: [null, [Validators.required]],
      place_of_birth: [null],
      gender_id: [null, [Validators.required]],
      mothers_maiden_name: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      monthly_family_income: [null, [Validators.required]],
      id_card_presented: [null, [Validators.required]],
      id_card_number: [null, [Validators.required]],
      primary_contact: [null, [Validators.required]],
      alternate_contact: [null],
      house_ownership: [null, [Validators.required]],
      housing_conditioning: [null, [Validators.required]],
      province_id1: [null, [Validators.required]],
      citmun_id1: [null, [Validators.required]],
      barangay_id1: [null, [Validators.required]],
      street: [null],
      venue: [null, [Validators.required]],
      family_details: this.fb.array([]),
      assistance_details: this.fb.array([]),
      member_count: [null],
      form_trans_no: [null],
      educational_attainment: [null],
      remarks: [null],
      total_family_income: [null],
      no_of_older: [null, [Validators.required]],
      no_of_pregnant_or_lactating: [null, [Validators.required]],
      no_of_pwds_and_conditions: [null, [Validators.required]]
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

    this.dafacService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
    })

    this.evacuationCenterService.getRegion().subscribe(data => {
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
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.isLoading = true;
      this.dafacService.getDafacEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        console.log("MAIN DATA", main_data)
        this.validateForm.patchValue({
          region_id: main_data.region_id.toString(),
          province_id: main_data.province_id.toString(),
          province_id1: main_data.province_id.toString(),
          district: main_data.district,
          barangay_id: main_data.barangay_id.toString(),
          barangay_id1: main_data.family_head_barangay_id.toString(),
          street: main_data.family_head_street,
          citmun_id: main_data.citmun_id.toString(),
          citmun_id1: main_data.citmun_id.toString(),
          venue: main_data.venue,
          evacuation_center_guid: main_data.evacuation_center_guid,
          prefix: main_data.prefix,
          first_name: main_data.first_name,
          middle_name: main_data.middle_name,
          last_name: main_data.last_name,
          suffix: main_data.suffix,
          name_extension: main_data.name_extension,
          fourps_beneficiary: main_data.fourps_beneficiary.toString(),
          ips: main_data.ips.toString(),
          type_of_ethnicity: main_data.type_of_ethnicity,
          birth_date: main_data.birth_date,
          place_of_birth: main_data.place_of_birth,
          gender_id: main_data.gender_id.toString(),
          mothers_maiden_name: main_data.mothers_maiden_name,
          occupation: main_data.occupation,
          monthly_family_income: main_data.monthly_family_income,
          id_card_presented: main_data.id_card_presented,
          id_card_number: main_data.id_card_number,
          primary_contact: main_data.primary_contact,
          alternate_contact: main_data.alternate_contact,
          house_ownership: main_data.house_ownership.toString(),
          housing_conditioning: main_data.housing_conditioning.toString(),
          form_trans_no: main_data.form_trans_no,
          no_of_older: main_data.no_of_older,
          no_of_pregnant_or_lactating: main_data.no_of_pregnant_or_lactating,
          no_of_pwds_and_conditions: main_data.no_of_pwds_and_conditions,
          educational_attainment: main_data.educational_attainment
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

        this.familyassistanceDetails = main_data.assistance_details;
        if(this.familyassistanceDetails != null) {
          this.dataDisplay = ['']
          this.familyassistanceDetails.forEach((element: any) => {
            this.quantitiesAssistance().push(
              this.fb.group({
                full_name_assistance: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                person_guid: element.person_guid,
                kind_type: element.kind_type,
                qty: element.qty,
                cost: element.cost,
                provider: element.provider
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
          this.validateForm.patchValue({
            prefix: data[0].prefix,
            first_name: data[0].first_name,
            middle_name: data[0].middle_name,
            last_name: data[0].last_name,
            suffix: data[0].suffix,
            province_id1: data[0].province_id.toString(),
            citmun_id1: data[0].citmun_id.toString(),
            barangay_id1: data[0].barangay_id.toString(),
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
                    educational_attainment: element.educational_attainment_id.toString(),
                    occupational_skills: element.profession,
                    remarks: element.remarks,
                    occupation_income: element.occupation_income
                  })
                );
                
              });
            }
        })
        this.updateIncome()
      }
    }

  }

  quantities() : FormArray {
    return this.validateForm.get("family_details") as FormArray
  }

  quantitiesAssistance() : FormArray {
    return this.validateForm.get("assistance_details") as FormArray
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

  newQuantityAssistance(): FormGroup {
    return this.fb.group({
      full_name_assistance: [''],
      kind_type: [''],
      qty: [''],
      cost: [''],
      provider: [''],
      person_guid: [''],
      main_guid: [''],
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  addQuantityAssistance() {
    this.quantitiesAssistance().push(this.newQuantityAssistance());
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

  removeQuantityAssistance(i:number) {
    this.modal.confirm({
      nzTitle: 'Do you Want to remove these item?',
      nzOnOk: () => {
        this.quantitiesAssistance().removeAt(i);
        // this.updateIncome();
        if (this.quantitiesAssistance().length == 0) {
          this.dataDisplayAssistance = [];
        }
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/main/social-welfare/dafac-registration'])
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
    this.validateForm.value.total_family_income = this.totalIncome
    
    let s = this.validateForm.value.family_details;
    this.validateForm.value.member_count = Number(s.length)
    for (let i=0; i < s.length; i++) {
      s[i].occupation_income = Number(s[i].occupation_income)
    } 

    let x = this.validateForm.value.assistance_details;
    for (let i=0; i < x.length; i++) {
      x[i].cost = Number(x[i].cost)
      x[i].qty = Number(x[i].qty)
    } 

    if(!this.param) {
      this.saveLoading = true;
      this.validateForm.value.person_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.dafacService.saveDafac(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/dafac-registration'])
            this.notification.create(
              "success",
              'Successfully Saved',
              'DAFAC Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'DAFAC Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.dafacService.updateDafac(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/dafac-registration'])
          this.notification.create(
            "success",
            'Successfully Updated',
            'DAFAC Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'DAFAC Setup unsuccessfully updated.'
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
          occupational_skills: "",
          person_guid: data.person_guid,
          remarks: "",
          occupation_income: ""
        }))
      }
    });

  }

  openBrowseDrawerAssistance(): void {
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
      console.log("after close ass", data);
      this.dataDisplayAssistance = ['']
      if (data) {
        this.quantitiesAssistance().push(this.fb.group({
          full_name_assistance: data.first_name + ' ' + data.middle_name + ' ' + data.last_name + ' ' + data.suffix,
          kind_type: "",
          qty: "",
          cost: "",
          provider: "",
          person_guid: data.person_guid,
        }))
      }
    });

  }

  evacuationCenterBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Evacuation Center List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: EvacuationBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log("after close evacuation", data);
      this.validateForm.patchValue({
        venue: data.venue,
        evacuation_center_guid: data.evacuation_center_guid
      })
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
