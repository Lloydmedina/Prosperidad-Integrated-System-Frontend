import { Component, HostListener, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-persons-add-template',
  templateUrl: './persons-add-template.component.html',
  styleUrls: ['./persons-add-template.component.scss']
})
export class PersonsAddTemplateComponent implements OnInit {

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let result = confirm("Changes you made may not be saved.");
    if (result) {
      // Do more processing...
    }
    event.returnValue = false; // stay on same page
  }

  selectedValue: any;
  selectedCityMun: any;
  checked = true;
  warning: any;
  warningAlert = false;
  loading = false;
  avatarUrl?: string;
  isLoading = true;
  saveLoading = false;
  param: any;
  buttonTitle: any;
  imageUrl: string = "assets/img/MunicipalLogo.png";

  listOfData: any[] = [];

  validateForm!: FormGroup;
  date = null;
  ageData: any;
  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];

  file_name: any;
  base_64: any;
  info_file: any;
  sub: any;
  SERVER_ADDRESS: string = environment.apiUrl;
  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private msg: NzMessageService,
    private notification: NzNotificationService,
    private personService: PersonService,
    private route: ActivatedRoute,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({
      prefix: [null],
      first_name: [null, [Validators.required]],
      middle_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      suffix: [null],
      province_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      street: [null],
      birth_date: [null, [Validators.required]],
      citizenship: [null, [Validators.required]],
      height: [0],
      weight: [0],
      gender_id: [null, [Validators.required]],
      place_of_birth: [null, [Validators.required]],
      tin: [null],
      civil_status_id: [null, [Validators.required]],
      profession: [null],
      religion: [null],
      person_image: [null],
      person_file_name: [null],
      person_base64: [null],
      age: [null],
      default_checked: [null]
    });

    this.route.queryParams.subscribe(params => {
      if (params) {
        this.validateForm.patchValue({
          first_name: params['firstname'],
          middle_name: params['middlename'],
          last_name: params['lastname'],
          suffix: params['suffix_name']
        })
      }
    })

    this.personService.getPerson().subscribe(async data => {
      this.listOfData = data[0];
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

    this.buttonTitle = "Save & Exit"
      var defaultProvince = 73
      this.selectedValue = defaultProvince.toString()
      var defaultMunicipality = 40
      this.validateForm.patchValue({
        citmun_id: defaultMunicipality.toString()
      })
  }

  cancel(): void {
    if (this.path[2] == "fc-registration") {
      this.router.navigate(['/main/social-welfare/fc-registration/add-form'])
    } else if (this.path[2] == "general-intake") {
      this.router.navigate(['/main/social-welfare/general-intake/add-form'])
    } else if (this.path[2] == "dafac-registration") {
      this.router.navigate(['/main/social-welfare/dafac-registration/add-form'])
    } else if (this.path[2] == "dafac-intake") {
      this.router.navigate(['/main/social-welfare/dafac-intake/add-form'])
    } else if (this.path[2] == "aics-registration") {
      this.router.navigate(['/main/social-welfare/aics-registration/add-form'])
    } else if (this.path[2] == "aics-intake") {
      this.router.navigate(['/main/social-welfare/aics-intake/add-form'])
    } else if (this.path[2] == "osca-registration") {
      this.router.navigate(['/main/social-welfare/osca-registration/add-form'])
    } else if (this.path[2] == "osca-intake") {
      this.router.navigate(['/main/social-welfare/osca-intake/add-form'])
    }
  }

  selectedDefault(value: any) {
    if(value == true) {
      this.validateForm.value.default_checked = "true"
      var defaultProvince = 73
      var defaulyCityMun = 40
      this.selectedValue = defaultProvince.toString()
      this.selectedCityMun = defaulyCityMun.toString()
      // this.validateForm.patchValue({
      //   province_id: defaultProvince.toString(),
      // })
    } else {
      this.validateForm.value.default_checked = "false"
      this.selectedValue = null
      this.selectedCityMun = null
    }
  }

  getAge() {
    const bdate = new Date(this.validateForm.value.birth_date)
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    this.ageData = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  submitForm(): void {
    this.saveLoading = true;
    if (this.validateForm.valid) {
      // this.validateForm.value.birth_date = this.validateForm.value.birth_date.toString()
      this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
      this.validateForm.value.citmun_id = Number(this.validateForm.value.citmun_id)
      this.validateForm.value.civil_status_id = Number(this.validateForm.value.civil_status_id)
      this.validateForm.value.gender_id = Number(this.validateForm.value.gender_id)
      this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
      this.validateForm.value.default_checked = this.validateForm.value.default_checked.toString()
      this.getAge()
      this.validateForm.value.age = this.ageData;

      if (this.validateForm.value.suffix == null) {
        this.validateForm.value.suffix = ""
      }
      
      if(this.info_file) {
        this.validateForm.value.person_image = this.avatarUrl
        this.validateForm.value.person_file_name = this.file_name
        this.validateForm.value.person_base64 = this.base_64
      }

      var personRecord = this.listOfData
      personRecord = this.listOfData.filter((data: any) => 
      data.first_name.toLowerCase() == this.validateForm.value.first_name.trim().toLowerCase()
      && data.middle_name.toLowerCase() == this.validateForm.value.middle_name.trim().toLowerCase()
      && data.last_name.toLowerCase().indexOf(this.validateForm.value.last_name.trim().toLowerCase()) > -1 
      && data.suffix.toLowerCase() == this.validateForm.value.suffix.trim().toLowerCase()
      && data.gender_id == this.validateForm.value.gender_id
      && data.age == this.validateForm.value.age )
      console.log("person record", personRecord)
      if (!personRecord.length) {
        this.personService.savePerson(this.validateForm.value).subscribe(data => {
          this.modal.confirm({
            nzTitle: 'Do you Want to use this person?',
            nzCancelText: 'Not Now (Return to list)',
            nzOnCancel: () => {
              if (this.path[2] == "fc-registration") {
                this.router.navigate(['/main/social-welfare/fc-registration/add-form'])
              } else if (this.path[2] == "general-intake") {
                this.router.navigate(['/main/social-welfare/general-intake/add-form'])
              } else if (this.path[2] == "dafac-registration") {
                this.router.navigate(['/main/social-welfare/dafac-registration/add-form'])
              } else if (this.path[2] == "dafac-intake") {
                this.router.navigate(['/main/social-welfare/dafac-intake/add-form'])
              } else if (this.path[2] == "aics-registration") {
                this.router.navigate(['/main/social-welfare/aics-registration/add-form'])
              } else if (this.path[2] == "aics-intake") {
                this.router.navigate(['/main/social-welfare/aics-intake/add-form'])
              } else if (this.path[2] == "osca-registration") {
                this.router.navigate(['/main/social-welfare/osca-registration/add-form'])
              } else if (this.path[2] == "osca-intake") {
                this.router.navigate(['/main/social-welfare/osca-intake/add-form'])
              }
              this.notification.create(
                "success",
                'Successfully Saved',
                'Setup has successfully saved.'
              );
            },
            nzOnOk: () => {
                if (data) {
                  this.saveLoading = false;
                  if (this.path[2] == "fc-registration") {
                    this.router.navigate(['/main/social-welfare/fc-registration/add-form/fc-registration-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "general-intake") {
                    this.router.navigate(['/main/social-welfare/general-intake/add-form/general-intake-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "dafac-registration") {
                    this.router.navigate(['/main/social-welfare/dafac-registration/add-form/dafac-registration-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "dafac-intake") {
                    this.router.navigate(['/main/social-welfare/dafac-intake/add-form/dafac-intake-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "aics-registration") {
                    this.router.navigate(['/main/social-welfare/aics-registration/add-form/aics-registration-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "aics-intake") {
                    this.router.navigate(['/main/social-welfare/aics-intake/add-form/aics-intake-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "osca-registration") {
                    this.router.navigate(['/main/social-welfare/osca-registration/add-form/osca-registration-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  } else if (this.path[2] == "osca-intake") {
                    this.router.navigate(['/main/social-welfare/osca-intake/add-form/osca-intake-form'], { queryParams: { firstname: this.validateForm.value.first_name, middlename: this.validateForm.value.middle_name, lastname: this.validateForm.value.last_name, 
                      suffix_name: this.validateForm.value.suffix, province_id: this.validateForm.value.province_id, citmun_id: this.validateForm.value.citmun_id, barangay_id: this.validateForm.value.barangay_id, prefix: this.validateForm.value.prefix,
                      street: this.validateForm.value.street, birth_date: this.validateForm.value.birth_date,  gender_id: this.validateForm.value.gender_id,  place_of_birth: this.validateForm.value.place_of_birth, age: this.validateForm.value.age, religion: this.validateForm.value.religion,
                      civil_status_id: this.validateForm.value.civil_status_id, contact_no: this.validateForm.value.contact_no } })
                  }
                  this.notification.create(
                    "success",
                    'Successfully Saved',
                    'Setup has successfully saved.'
                  );
                } else {
                  this.saveLoading = false;
                  this.notification.create(
                    "error",
                    'Unsuccessfully Saved',
                    'Setup unsuccessfully saved.'
                  );
                }
              }
          });
        }, error => {
          this.saveLoading = false;
          this.msg.create("error","Server Error");
        })
      } else {
        this.warning = "This Person's Information already exist in Cummulative Data !"
        this.warningAlert = true;
        this.saveLoading = false;
      }
      console.log("Submit Value", this.validateForm.value)

      
      
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          this.isLoading = false;
          this.saveLoading = false;
        }
      });
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
    // switch (info.file.status) {
    //   case 'uploading':
    //     this.loading = true;
    //     this.personService.saveImage(info.file).subscribe(data => {

    //     })
    //     console.log("INFO", info.file)
    //     break;
    //   case 'done':
    //     // Get this url from response in real world.
    //     this.getBase64(info.file!.originFileObj!, (img: string) => {
    //       this.loading = false;
    //       this.avatarUrl = img;
    //     });
    //     break;
    //   case 'error':
    //     this.msg.error('Network error');
    //     this.loading = false;
    //     break;
    // }
  }

}
