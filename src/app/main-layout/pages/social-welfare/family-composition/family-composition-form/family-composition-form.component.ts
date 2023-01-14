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
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-family-composition-form',
  templateUrl: './family-composition-form.component.html',
  styleUrls: ['./family-composition-form.component.scss']
})
export class FamilyCompositionFormComponent implements OnInit {

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
  educationalTypeDropdown: any = [];
  
  file_name: any;
  base_64: any;
  info_file: any;

  placement: NzDrawerPlacement = 'bottom';
  dataDisplay:any;
  mainPersonGuid: any;
  compositionDetails: any

  incomeAmountDetails = []

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private route: ActivatedRoute,
    private familyCompositionService: FamilyCompositionService,
    private personService: PersonService,
    public datepipe: DatePipe,
    private drawerService: NzDrawerService
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
      this.addParam = params['person_guid']
    });
   }

  ngOnInit() {
    this.validateForm = this.fb.group({
      person_guid: [null],
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
      monthly_income: [null, [Validators.required]],
      contact_no: [null],
      secondary_contact_no: [null],
      fourps_member: [null, [Validators.required]],
      ips: [null, [Validators.required]],
      house_occupancy: [null, [Validators.required]],
      property_cost: [null, [Validators.required]],
      total_family_income: [null],
      member_count: [null],
      form_trans_no: [null],
      details: this.fb.array([]),
      type_of_ethnicity: [null],
      full_name: []
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

    this.familyCompositionService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
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
      this.familyCompositionService.getFamilyCompositionEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        this.validateForm.patchValue({
          monthly_income: main_data.monthly_income,
          fourps_member: main_data.fourps_member.toString(),
          ips: main_data.ips.toString(),
          house_occupancy: main_data.house_occupancy,
          property_cost: main_data.property_cost,
          contact_no: main_data.contact_no,
          secondary_contact_no: main_data.secondary_contact_no,
          educational_attainment: main_data.educational_attainment,
          occupation: main_data.occupation,
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
          height: main_data.height,
          weight: main_data.weight,
          gender_id: main_data?.gender_id?.toString(),
          place_of_birth: main_data.place_of_birth,
          tin: main_data.tin,
          civil_status_id: main_data?.civil_status_id?.toString(),
          profession: main_data.profession,
          religion: main_data.religion,
          person_image: main_data.person_image,
          person_file_name: main_data.person_file_name,
          person_base64: main_data.person_base64,
          age: main_data.age,
          form_trans_no: main_data.form_trans_no
        })

        if (main_data.person_image) {
          this.avatarUrl = "data:image/png;base64," + main_data.person_image;
        }

        this.compositionDetails = main_data.details;
        if(this.compositionDetails != null) {
          this.dataDisplay = ['']
          this.compositionDetails.forEach((element: any) => {
            this.quantities().push(
              this.fb.group({
                full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                age: element.age,
                civil_status: element.civil_status_name,
                relation: element.relation,
                educational_attainment: element.educational_attainment,
                occupation: element.occupation,
                occupation_income: element.occupation_income,
                person_guid: element.person_guid,
                status: element.status
              })
            );
            
          });
        }
        this.updateIncome()
        console.log("AAH OKAY", main_data)
      })
      
    } else {
      this.buttonTitle = "Save & Exit"

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
            citizenship: data[0].citizenship,
            height: data[0].height,
            weight: data[0].weight,
            gender_id: data[0].gender_id.toString(),
            place_of_birth: data[0].place_of_birth,
            tin: data[0].tin,
            civil_status_id: data[0].civil_status_id.toString(),
            profession: data[0].profession,
            religion: data[0].religion,
            person_image: data[0].person_image,
            person_file_name: data[0].person_file_name,
            person_base64: data[0].person_base64,
            age: data[0].age,
            educational_attainment: data[0].educational_attainment.toString(),
            occupation: data[0].profession,
            contact_no: data[0].phone_no
          })

          if (data[0].person_image) {
            this.avatarUrl = "data:image/png;base64," + data[0].person_image;
          }
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
    this.router.navigate(['/main/social-welfare/fc-registration'])
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

    this.validateForm.value.fourps_member = Number(this.validateForm.value.fourps_member)
    this.validateForm.value.ips = Number(this.validateForm.value.ips)
    
    this.validateForm.value.monthly_income = Number(this.validateForm.value.monthly_income)
    this.validateForm.value.property_cost = Number(this.validateForm.value.property_cost)
    this.validateForm.value.total_family_income = this.totalIncome

    if (this.validateForm.value.prefix) {
      this.validateForm.value.prefix = this.validateForm.value.prefix.trim()
    }
    if (this.validateForm.value.middle_name) {
      this.validateForm.value.middle_name = this.validateForm.value.middle_name.trim()
    }
    if (this.validateForm.value.suffix) {
      this.validateForm.value.suffix = this.validateForm.value.suffix.trim()
    }
    
    this.validateForm.value.first_name = this.validateForm.value.first_name.trim()
    
    this.validateForm.value.last_name = this.validateForm.value.last_name.trim()

    if (this.validateForm.value.suffix == null) {
      this.validateForm.value.suffix = ""
    } else if (this.validateForm.value.suffix != "") {
      this.validateForm.value.suffix = " " + this.validateForm.value.suffix
    }

    if (this.validateForm.value.prefix == null) {
      this.validateForm.value.prefix = ""
    } else if (this.validateForm.value.prefix != "") {
      this.validateForm.value.prefix = this.validateForm.value.prefix + " "
    }

    if (this.validateForm.value.middle_name == null || this.validateForm.value.middle_name == '') {
      this.validateForm.value.middle_name = " "
    } else if (this.validateForm.value.middle_name != "") {
      this.validateForm.value.middle_name = " " + this.validateForm.value.middle_name + " "
    }

    this.validateForm.value.full_name = this.validateForm.value.prefix + "" + this.validateForm.value.first_name + "" + this.validateForm.value.middle_name + "" + this.validateForm.value.last_name + "" + this.validateForm.value.suffix
    
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
      this.saveLoading = false;
      this.validateForm.value.person_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.familyCompositionService.saveFamilyComposition(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/fc-registration'])
            this.notification.create(
              "success",
              'Successfully Saved',
              'Family Composition Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Family Composition Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.familyCompositionService.updateFamilyComposition(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/main/social-welfare/fc-registration'])
          this.notification.create(
            "success",
            'Successfully Updated',
            'Family Composition Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'Family Composition Setup unsuccessfully updated.'
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
          age: data.age,
          civil_status: data.civil_status_name,
          relation: "",
          educational_attainment: data.educational_attainment,
          occupation: data.profession,
          occupation_income: "",
          person_guid: data.person_guid,
          status: data.status
        }))
      }
    });

  }

  incomeAmount: any = []
  monthlyIncomeAmount: any;
  propertyCostAmount: any;
  updateMonthlyIncome(event: any) {
    this.monthlyIncomeAmount = event;
  }
  updatePropertyCost(event: any) {
    this.propertyCostAmount = event;
  }
  totalIncome: number = 0.0;
  updateIncome() {
    this.totalIncome = 0
    let s = this.validateForm.value.details
    for(let x = 0; x < s.length; x++)
    {
        this.totalIncome += Number(s[x].occupation_income)
    }
  }

}
