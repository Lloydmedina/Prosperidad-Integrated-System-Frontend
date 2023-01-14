import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-project-lgu-form',
  templateUrl: './project-lgu-form.component.html',
  styleUrls: ['./project-lgu-form.component.css'],
  providers: [DatePipe]
})
export class ProjectLguFormComponent implements OnInit {
  validateForm!: FormGroup;
  project: any = []
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };

  printDate = new Date();
  title = ""
  path: any;
  param: any;
  loading = false;
  avatarUrl_1?: string;
  avatarUrl_2?: string;
  headerLogo1?: string;
  headerLogo2?: string
  isLoading = true;
  saveLoading = false;

  
  file_name_1: any;
  base_64_1: any;
  info_file_1: any;

  file_name_2: any;
  base_64_2: any;
  info_file_2: any;
  sub: any;

  regionList: any = []
  provinceList: any = []
  provinceListFiltered: any =[]
  citMunList: any = []
  citMunListFiltered: any =[]
  footerAlignValue = "Left"
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private projectService: ProjectLguService,
    private msg: NzMessageService,
    private pathService: PathsegmentService,
    private personService: PersonService,
    public datePipe: DatePipe
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
  ngOnInit() {
    this.path = this.pathService.getPath()

    this.projectService.getConfigValue().subscribe(data => {
      console.log("VALUES", data)
      this.regionList = data[0].region
      this.provinceList = data[1].province
      this.citMunList = data[2].citmun
      

      if(this.param)
      {
        this.projectService.getById(this.param).subscribe(data => {
          console.log(data);
          if(data){
            this.validateForm.patchValue({
            
              project_title_guid: data.project_title_guid,
              title_name: data.title_name,
              description: data.description,
              status: data.status,
              tel_no: data.tel_no,
              mobile_no: data.mobile_no,
              email_address:data.email_address,
              website: data.website,
              lgu_city_mun_config:{
                municipal_code:  data.lgu_city_mun_config.municipal_code,
                region_id: String(data.lgu_city_mun_config.region_id),
                province_id:  String(data.lgu_city_mun_config.province_id),
                zipcode_id:   data.lgu_city_mun_config.zipcode_id,
                city_mun_id:    String(data.lgu_city_mun_config.city_mun_id),
                city_mun_name: data.lgu_city_mun_config.city_mun_name,
                status_name: data.lgu_city_mun_config.status_name,
                province_area: data.lgu_city_mun_config.province_area,
                zip_code: data.lgu_city_mun_config.zip_code,
                region: data.lgu_city_mun_config.region,
                street: data.lgu_city_mun_config.street,
                barangay_id: String(data.lgu_city_mun_config.barangay_id),
                barangay: data.lgu_city_mun_config.barangay,
              },
              report_config: {
                header_logo1: data.report_config.header_logo1,
                header_logo2: data.report_config.header_logo2,
                file_name1: data.report_config.file_name1,
                file_name2: data.report_config.file_name2,
                base_64_1: data.report_config.base_64_1,
                base_64_2: data.report_config.base_64_2,
                header1:  data.report_config.header1,
                header2:  data.report_config.header2,
                header3: data.report_config.header3,
                footer1: data.report_config.footer1,
                footer2: data.report_config.footer2,
                footer3: data.report_config.footer3,
                footer_align:data.report_config.footer_align
              }
            })

            this.headerLogo1 = "data:image/png;base64," + data.report_config.header_logo1;
            this.headerLogo2 = "data:image/png;base64," + data.report_config.header_logo2;
            this.getBrgy(data.lgu_city_mun_config.city_mun_id)

          }
        })
      }else{



      }


      this.isLoading = false
    })
    this.validateForm = this.fb.group({
      project_title_guid: [''],
      title_name:[''],
      description:[''],
      sss:[''],
      tin:[''],
      pagibig:[''],
      philhealth:[''],
      contact:[''],
      status:[''],
      tel_no:['',{validators: [Validators.required], updateOn:'blur'}],
      mobile_no:[''],
      email_address:['', [Validators.required, Validators.email]],
      website:[''],
      lgu_city_mun_config:  this.fb.group({
        municipal_code:['', [Validators.required]],
        province_id: ['', [Validators.required]],
        zipcode_id: ['', [Validators.required]],
        city_mun_id: ['', [Validators.required]],
        city_mun_name: ['', [Validators.required]],
        status_name: [''],
        province_area: [''],
        zip_code: [''],
        region_id:['', [Validators.required]],
        region:[''],
        street:[''],
        barangay:[''],
        barangay_id:['', [Validators.required]],
      }),
      report_config: this.fb.group({
        header_logo1:[''],
        header_logo2:[''],
        file_name1: [''],
        file_name2: [''],
        base_64_1: [''],
        base_64_2: [''],
        header1: [''],
        header2: [''],
        header3: [''],
        footer1: [''],
        footer2: [''],
        footer3: [''],
        footer4: 'PRINTED DATE: ' + this.datePipe.transform(this.printDate, 'MMMM d, y, h:mm a')  ,
        footer_align: ['']
      })
    })
  }

  // reportConfig(): FormGroup{
  //   return this.fb.group()
  // }

  regionSelect(value:number){
    let reg_name = this.regionList.filter((x:any) => Number(x.SysPK_region) === Number(value)).map((c:any) => c.reg_name)[0]
    this.validateForm.patchValue({
      lgu_city_mun_config:{
        region: reg_name,
        province_id: '',
        city_mun_id: '',
        title_name: ''
      }
    })

    this.provinceListFiltered = this.provinceList.filter((x:any) => Number(x.region_id) === Number(value))
  }

  provinceSelect(value:number){
    this.validateForm.patchValue({
      lgu_city_mun_config:{
        city_mun_id: '',
        title_name: '',
        barangay: '',
        barangay_id :''
    }})

    this.citMunListFiltered = this.citMunList.filter((x:any) => Number(x.province_id) === Number(value))
  }

  getBrgy(citMunID:number){
    
    this.personService.getBarangay(citMunID).subscribe(data => {
      this.barangayList = data
    })
  }
barangayList: any = []
  citMunSelect(value:number){
    let obj = this.citMunList.filter((x:any) => Number(x.city_mun_id) === Number(value))[0]
    this.getBrgy(value)
    
      if(obj != undefined){
        this.validateForm.patchValue({
          title_name:  obj.status_name + ' of '+ obj.city_mun_name,
          description: obj.city_mun_name + ", " +obj.province_area,
          lgu_city_mun_config:{
            province_area: obj.province_area,
            city_mun_name: obj.city_mun_name,
            status_name: obj.status_name,
            zip_code: obj.zip_code,
            zipcode_id: obj.zipcode_id,
            municipal_code: obj.municipal_code,
            barangay_id: '',
            barangay: ''
            
          }
        })
      }
   
  }

  brgySelect(value:number){
    let brgyName = this.barangayList.filter((x:any) => Number(x.brgy_id) === Number(value)).map((d:any) => d.brgy_name)[0]
  
      this.validateForm.patchValue({
        lgu_city_mun_config:{
          barangay: brgyName
        }
      
      })
  }

  reportConfig(){
    console.log("barangay", this.validateForm.value.lgu_city_mun_config)
    let foot1 = this.validateForm.value.lgu_city_mun_config.barangay + ", " + this.validateForm.value.lgu_city_mun_config.city_mun_name + ", " + this.validateForm.value.lgu_city_mun_config.province_area
    if(this.validateForm.value.lgu_city_mun_config.street != ""){
      foot1 = this.validateForm.value.lgu_city_mun_config.street + ", " + foot1
    }
    this.validateForm.patchValue({
    
      report_config:{
        header1: 'Republic of the Philippines',
        header2: 'Province of ' + this.validateForm.value.lgu_city_mun_config.province_area,
        header3:  this.validateForm.value.lgu_city_mun_config.status_name + " of " + this.validateForm.value.lgu_city_mun_config.city_mun_name,
        footer1: foot1,
        footer2: "Tel. No.: " + this.validateForm.value.tel_no,
        footer3: this.validateForm.value.email_address,
        footer_align: "Left"
      }
    })
  }
  submitForm(value:any){
    if (this.validateForm.valid) {
      if(!this.param)
      {
        this.modal.confirm({
          nzTitle: 'Do you really want to Save this record?',
          nzOnOk: () => {
            this.projectService.insert(value).subscribe(async (data: any) => {
              console.log(data)
              
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Saved',
                'LGU Record has successfully saved.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'LGU Record has not been saved.'
              );
            });
          }
        })
      }else{
        this.modal.confirm({
          nzTitle: 'Do you really want to Update this record?',
          nzOnOk: () => {
            this.projectService.update(this.param, value).subscribe(async (data: any) => {
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Updated',
                'LGU Record has successfully updated.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'LGU Record has not been updated.'
              );
            });
          }
        });
  
      }
    }
  }

  cancel(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
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

  handleChange(info: { file: NzUploadFile }, header:number): void {
    this.getBase64(info.file!.originFileObj!, (img: string) => {
      
            this.loading = false;
            if(header == 1){
              this.validateForm.patchValue({
                report_config:{
                  header_logo1: img,
                  file_name1: info.file!.name,
                  base_64_1: info.file!.thumbUrl
                }
              })
              this.headerLogo1 = img
            }else
            {    
               this.validateForm.patchValue({
              report_config:{
                header_logo2: img,
                file_name2: info.file!.name,
                base_64_2: info.file!.thumbUrl
              }
            })
              this.headerLogo2 = img
            }
          });
        }
      
  footerTab(){

  }
}
