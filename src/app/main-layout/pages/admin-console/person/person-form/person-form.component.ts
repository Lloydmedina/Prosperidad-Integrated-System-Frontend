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
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {

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
  citizenshipDefault: any = "Filipino"
  listOfData: any[] = [];

  validateForm!: FormGroup;
  date = null;
  ageData: any;
  genderDropdown: any;
  civilStatusDropdown: any;
  provinceDropdown: any = [];
  citymunDropdown: any = [];
  barangayDropdown: any = [];
  bloodtypeDropdown: any = [];
  educationalDropdown: any = [];
  defaultRegion: any;
  regionList: any;
  prefixValue: any = null;
  prefixValueData: any;

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
  ) {
    this.route.params.subscribe(params => {
      this.param = params['id'];
    });
   }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.validateForm = this.fb.group({
      prefix: [""],
      first_name: [null, [Validators.required]],
      middle_name: [""],
      last_name: [null, [Validators.required]],
      suffix: [""],
      province_id: [null, [Validators.required]],
      citmun_id: [null, [Validators.required]],
      barangay_id: [null, [Validators.required]],
      street: [null],
      birth_date: [null, [Validators.required]],
      citizenship: [null],
      height: [0],
      weight: [0],
      gender_id: [null, [Validators.required]],
      place_of_birth: [null],
      tin: [null],
      civil_status_id: [null, [Validators.required]],
      profession: [null],
      religion: [null],
      person_image: [null],
      person_file_name: [null],
      person_base64: [null],
      age: [null],
      default_checked: [null],
      educational_attainment: [null],
      phone_no: [null],
      telephone_no: [null],
      blood_type_id: [0],
      email_address: [null, [Validators.email]],
      region_id: [null, [Validators.required]],
      full_name: []
    });

    this.route.queryParams.subscribe(params => {
      var newDate = new Date()
      console.log("nimal", params)
      if (params) {
        this.validateForm.patchValue({
          first_name: params['firstname'],
          middle_name: params['middlename'],
          last_name: params['lastname'],
          suffix: params['suffix_name'],
          birth_date: params['birth_date']
        })
        this.date = params['birth_date']
      }
    })

    this.personService.getPerson().subscribe(async data => {
      this.listOfData = data[0];
    })

    this.personService.getBloodType().subscribe(data => {
      this.bloodtypeDropdown = data
    })

    this.personService.getRegion().subscribe(data => {
      this.regionList = data
      // console.log("LIST REG", data)
    })

    this.personService.getEducationalType().subscribe(data => {
      this.educationalDropdown = data
    })

    this.personService.getDropdownPrefix().subscribe(data => {
      this.prefixValueData = data
      console.log("prefix value", data)
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
      // console.log("this", this.provinceDropdown)
    })

    if (this.param) {
      this.buttonTitle = "Update & Exit"
      this.personService.getPersonGUID(this.param).subscribe((data: any) => {
        console.log("Update", data)
        this.validateForm.patchValue({
          prefix: data[0].prefix.trim(),
          first_name: data[0].first_name,
          middle_name: data[0].middle_name,
          last_name: data[0].last_name,
          suffix: data[0].suffix,
          educational_attainment: data[0].educational_attainment.toString(),
          phone_no: data[0].phone_no,
          telephone_no: data[0].telephone_no,
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
          blood_type_id: data[0].blood_type_id.toString(),
          email_address: data[0].email_address,
          region_id: data[0].region_id.toString()
        })
        if (data[0].person_image) {
          this.avatarUrl = "data:image/png;base64," + data[0].person_image;
        }
        if (data[0].default_checked == 'true') {
          this.checked = true;
          var defaultProvince = 73
          this.selectedValue = defaultProvince.toString()
          // this.validateForm.patchValue({
          //   province_id: defaultProvince.toString(),
          // })
        } else {
          this.checked = false;
          this.selectedValue = data[0].province_id.toString()
          // this.validateForm.patchValue({
          //   province_id: data[0].province_id.toString(),
          // })
        }
        console.log("BUSHET", data)
      })
    } else {
      this.buttonTitle = "Save & Exit"
      var defaultProvince = 73
      this.selectedValue = defaultProvince.toString()
      var defaultMunicipality = 40
      var defaultRegionS = 16
      this.defaultRegion = defaultRegionS.toString()
      this.validateForm.patchValue({
        citmun_id: defaultMunicipality.toString(),
        barangay_id: "36630"
       
      })
    }

  }

  cancel(): void {
    this.router.navigate(['/' + this.path[0] + '/' + this.path[1] + '/' + this.path[2]])
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
      if(!this.param) {
        this.selectedValue = null
        this.selectedCityMun = null
      } else {
        this.personService.getPersonGUID(this.param).subscribe((data: any) => {
          if (data[0].province_id == 73) {
            this.selectedValue = null
            this.selectedCityMun = null
          } else {
            this.validateForm.patchValue({
              province_id: data[0].province_id.toString(),
              citmun_id: data[0].citmun_id.toString(),
            })
          }
        })
      }
    }
  }

  getAge() {
    const bdate = new Date(this.validateForm.value.birth_date)
    const timeDiff = Math.abs(Date.now() - bdate.getTime() );
    this.ageData = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
  }

  // draft(): void {
  //   this.notification.blank(
  //     'Save as Draft',
  //     'Successfully Drafted!',
  //     // { nzDuration: 0 }
  //   );
  // }

  capitalizeWord(value: any) {
    const firstChar = value.charAt(0).toLocaleUpperCase();
    const restOfStr = value.substring(1).toLocaleLowerCase();
  
    return `${firstChar}${restOfStr}`;
  };

  capitalizeEachWord(value: any) {
    return value.split(" ").map((word: any) => this.capitalizeWord(word)).join(" ");
  }

  submitForm(): void {
    this.saveLoading = true;
    if (this.validateForm.valid) {
      this.validateForm.value.region_id = Number(this.validateForm.value.region_id)
      this.validateForm.value.educational_attainment = Number(this.validateForm.value.educational_attainment)
      this.validateForm.value.barangay_id = Number(this.validateForm.value.barangay_id)
      this.validateForm.value.citmun_id = Number(this.validateForm.value.citmun_id)
      this.validateForm.value.civil_status_id = Number(this.validateForm.value.civil_status_id)
      this.validateForm.value.gender_id = Number(this.validateForm.value.gender_id)
      this.validateForm.value.province_id = Number(this.validateForm.value.province_id)
      this.validateForm.value.default_checked = this.validateForm.value.default_checked.toString()
     
      if (this.validateForm.value.prefix) {
        this.validateForm.value.prefix = this.validateForm.value.prefix.trim()
      }
      if (this.validateForm.value.middle_name) {
        this.validateForm.value.middle_name = this.capitalizeEachWord(this.validateForm.value.middle_name)
        this.validateForm.value.middle_name = this.validateForm.value.middle_name.trim()
      }
      if (this.validateForm.value.suffix) {
        this.validateForm.value.suffix = this.validateForm.value.suffix.trim()
      }
      
      this.validateForm.value.first_name = this.capitalizeEachWord(this.validateForm.value.first_name.trim())
      this.validateForm.value.last_name = this.capitalizeEachWord(this.validateForm.value.last_name.trim())
      

      this.getAge()
      this.validateForm.value.age = this.ageData;

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
      
      if(this.info_file) {
        this.validateForm.value.person_image = this.avatarUrl
        this.validateForm.value.person_file_name = this.file_name
        this.validateForm.value.person_base64 = this.base_64
      }
      if(!this.param) {
        var personRecord = this.listOfData
        personRecord = this.listOfData.filter((data: any) => 
        data.first_name.toLowerCase() == this.validateForm.value.first_name.trim().toLowerCase()
        &&
        //  data.middle_name.toLowerCase() == this.validateForm.value.middle_name.trim().toLowerCase()
        // &&
         data.last_name.toLowerCase().indexOf(this.validateForm.value.last_name.trim().toLowerCase()) > -1 
        && data.suffix.toLowerCase() == this.validateForm.value.suffix.trim().toLowerCase()
        && data.gender_id == this.validateForm.value.gender_id
        && data.age == this.validateForm.value.age )
        console.log("person record", personRecord)
        if (!personRecord.length) {
          console.log("value data", this.validateForm.value)
          this.personService.savePerson(this.validateForm.value).subscribe(data => {
            if (data) {
              this.saveLoading = false;
              this.router.navigate(['/main/admin-console/person'])
              this.notification.create(
                "success",
                'Successfully Saved',
                'Person Setup has successfully saved.'
              );
            } else {
              this.saveLoading = false;
              this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Person Setup unsuccessfully saved.'
              );
            }
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
        console.log("Submit Value", this.validateForm.value)
        this.personService.updatePerson(this.param, this.validateForm.value).subscribe(data => {
          this.isLoading = false;
          if (data) {
            this.saveLoading = false;
            this.router.navigate(['/main/admin-console/person'])
            this.notification.create(
              "success",
              'Successfully Updated',
              'Person Setup has successfully updated.'
            );
          } else {
            this.saveLoading = false;
            this.notification.create(
              "error",
              'Unsuccessfully Updated',
              'Person Setup unsuccessfully updated.'
            );
          }
        }, error => {
          this.saveLoading = false;
          this.msg.create("error","Server Error");
        })
      }
      
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
