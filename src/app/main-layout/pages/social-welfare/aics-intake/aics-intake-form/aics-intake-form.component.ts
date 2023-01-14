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
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import { GeneralIntakeService } from 'src/core/services/general-intake/general-intake.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-aics-intake-form',
  templateUrl: './aics-intake-form.component.html',
  styleUrls: ['./aics-intake-form.component.scss']
})
export class AicsIntakeFormComponent implements OnInit {

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
  educationalTypeDropdown: any;

  file_name: any;
  base_64: any;
  info_file: any;

  placement: NzDrawerPlacement = 'bottom';
  dataDisplay:any;
  mainPersonGuid: any;
  memberDetails: any

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
    private aicsIntakeService: AicsIntakeService,
    private generalIntakeService: GeneralIntakeService,
    private personService: PersonService,
    public datepipe: DatePipe,
    private drawerService: NzDrawerService,
    private pathService: PathsegmentService
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
      monthly_income: [null],
      contact_no: [null],
      secondary_contact_no: [null],
      fourps_member: [null],
      ips: [null],
      house_ownership: [null],
      property_cost: [null],
      total_family_income: [null],
      owner: [null],
      renter: [null],
      estimated_damaged: [null],
      if_distressed: [null],
      physical_disability: [null],
      type_of_disability_id: [null],
      sources_of_income: [null],
      no_of_hectares: [null],
      crops_planted:  [null],
      area_of_location:  [null],
      other_sources_of_income:  [null],
      member_count: [null],
      form_trans_no: [null],
      details: this.fb.array([]),
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

    this.aicsIntakeService.getEducationalType().subscribe(data => {
      this.educationalTypeDropdown = data
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
      this.aicsIntakeService.getAicsIntakeEdit(this.param).subscribe((main_data: any) => {
        this.isLoading = false;
        this.mainPersonGuid = main_data.person_guid;
        console.log("AHAK OY", main_data)
        this.validateForm.patchValue({
          monthly_income: main_data.monthly_family_income,
          fourps_member: main_data.fourps_member,
          ips: main_data.ips,
          house_ownership: main_data.house_ownership,
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
          owner: main_data.owner,
          renter: main_data.renter,
          estimated_damaged: main_data.estimated_damaged,
          if_distressed: main_data.if_distressed,
          physical_disability: main_data.physical_disability,
          type_of_disability_id: main_data.type_of_disability_id.toString(),
          sources_of_income: main_data.sources_of_income,
          no_of_hectares: main_data.no_of_hectares,
          crops_planted:  main_data.crops_planted,
          area_of_location:  main_data.area_of_location,
          other_sources_of_income:  main_data.other_sources_of_income,
          form_trans_no: main_data.form_trans_no
        })

        if (main_data.house_ownership == 'Owner') {
          this.validateForm.patchValue({
            house_ownership: "Owned"
          })
        } else if (main_data.house_ownership == 'Renter') {
          this.validateForm.patchValue({
            house_ownership: "Rented"
          })
        } else if (main_data.house_ownership == 'Sharer') {
          this.validateForm.patchValue({
            house_ownership: "Shared"
          })
        }

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
      })
      
    } else {
      this.buttonTitle = "Save & Exit"

      if (this.addParam) {
        this.isLoading = true;
        this.aicsIntakeService.getAddPerson(this.addParam).subscribe((data: any) => {
          this.isLoading = false;
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
            educational_attainment: data.educational_attainment,
            occupation: data.occupation,
            monthly_income: data.monthly_family_income,
            house_occupancy: data.house_occupancy
          })

          if (data.house_ownership == 'Owner') {
            this.validateForm.patchValue({
              house_ownership: "Owned"
            })
          } else if (data.house_ownership == 'Renter') {
            this.validateForm.patchValue({
              house_ownership: "Rented"
            })
          } else if (data.house_ownership == 'Sharer') {
            this.validateForm.patchValue({
              house_ownership: "Shared"
            })
          }

          if (data.person_image) {
            this.avatarUrl = "data:image/png;base64," + data.person_image;
          }

          this.addMemberDetails = data.details;
          if(this.addMemberDetails != null) {
            this.dataDisplay = ['']
            this.addMemberDetails.forEach((element: any) => {
              this.quantities().push(
                this.fb.group({
                  full_name: element.first_name + ' ' + element.middle_name + ' ' + element.last_name + ' ' + element.suffix,
                  age: element.age,
                  civil_status: element.civil_status_name,
                  relation: element.relation,
                  educational_attainment: element.educational_attainment,
                  occupation: element.occupational_skills,
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
    this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
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
    
    this.validateForm.value.monthly_income = Number(this.validateForm.value.monthly_income)
    this.validateForm.value.property_cost = Number(this.validateForm.value.property_cost)
    this.validateForm.value.estimated_damaged = Number(this.validateForm.value.estimated_damaged)
    this.validateForm.value.no_of_hectares = Number(this.validateForm.value.no_of_hectares)
    this.validateForm.value.type_of_disability_id = Number(this.validateForm.value.type_of_disability_id)
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
      this.validateForm.value.person_guid = this.addParam
      console.log("YAKS", this.validateForm.value)
      this.aicsIntakeService.saveAicsIntake(this.validateForm.value).subscribe(data => {
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
            this.notification.create(
              "success",
              'Successfully Saved',
              'AICS Intake Setup has successfully saved.'
            );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'AICS Intake Setup unsuccessfully saved.'
          );
        }
      }, error => {
        this.saveLoading = false;
        this.msg.create("error","Server Error");
      })
    } else {
      console.log("UPDATE", this.validateForm.value)
      this.validateForm.value.person_guid = this.mainPersonGuid
      this.aicsIntakeService.updateAicsIntake(this.param, this.validateForm.value).subscribe(data => {
        this.isLoading = false;
        if (data) {
          this.saveLoading = false;
          this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
          this.notification.create(
            "success",
            'Successfully Updated',
            'AICS Intake Setup has successfully updated.'
          );
        } else {
          this.saveLoading = false;
          this.notification.create(
            "error",
            'Unsuccessfully Updated',
            'AICS Intake Setup unsuccessfully updated.'
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
          educational_attainment: "",
          occupation: "",
          occupation_income: "",
          person_guid: data.person_guid,
          status: data.status
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

}
