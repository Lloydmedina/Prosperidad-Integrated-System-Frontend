import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, Observer } from 'rxjs';
import { BusinessService } from 'src/core/services/business/business.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.scss']
})
export class BusinessFormComponent implements OnInit {
  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  btnCancel = "Cancel"

  businessEntityDropDown: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private bizService: BusinessService,
    private lguService: ProjectLguService,
    private personService: PersonService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    this.lgu_config = JSON.parse(localStorage.getItem('auth-user') || '{}')[1].project.lgu_city_mun_config
    this.bizService.getList(1,0).subscribe((value:any) => {
      this.businessList = value[0]
    })
    }) }

    lgu_config: any;
    prov:any = "";
    citmun: any = "";
    brgyList: any =[];
    isActive = true;
    isEdited = false;


  ngOnInit() {
    this.loading = true
    this.path = this.pathService.getPath();
    
    this.validateForm = this.fb.group({
      business_name : ['', [Validators.required], [this.businessNameAsyncValidator]],
      trade_name: ['', [Validators.required], [this.tradeNameAsyncValidator]],
      reg_status: 0,
      owner_id: ['', [Validators.required]],
      owner_name:[''],
      mobile_no: [''],
      tel_no: [''],
      email: ['', [Validators.email]],
      street: [''],
      building: [''],
      brgy_id: ['', [Validators.required]],
      entity_id: [null, [Validators.required]]
    })

    this.bizService.getBsusinessEntity().subscribe(value => {
      this.businessEntityDropDown = value
    })

    this.bizService.getPerson().subscribe(data => {
     this.personList = data[0]
     this.prov = this.lgu_config.province_area
     this.citmun = this.lgu_config.city_mun_name
     this.personService.getBarangay(0).subscribe(brgy => {
      this.brgyList = brgy
      
      this.loading = false
     })
     
      this.businessNameAsyncValidator
      this.tradeNameAsyncValidator
    })


    if(this.param){
      this.bizService.getById(this.param).subscribe(data =>{
        this.showHistory()
        this.autoConfig(data.status);
        
        this.validateForm.patchValue({
          business_name : data.business_name,
          trade_name: data.trade_name,
          reg_status: data.reg_status,
          owner_id: data.owner_id,
          owner_name: data.owner_name,
          mobile_no: data.mobile_no,
          tel_no: data.tel_no,
          email: data.email,
          street: data.street,
          building: data.building,
          brgy_id: String(data.brgy_id),
          entity_id: data.entity_id
        })
      })
    }
  }
  ownerSelect(id:any){
    let obj = this.personList.filter((x:any) => x.person_guid == id).map((z:any) => z)[0]
    this.validateForm.patchValue({
      owner_name: obj.first_name + " " + String(obj.middle_name).slice(0,1) + ". " + obj.last_name
    })

    console.log(this.validateForm.value.owner_name)
  }
  addPerson(){
    this.modal.confirm({
      nzTitle: 'Business Owner not found?',
      nzContent: 'You will redirect to Person Form to setup the record of the business owner. Do you want to continue?',
      nzOnOk: () => {
        this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/person/add-form"])
      }
    })
  }

  submitForm(value:any){
    // console.log(value)
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    value.business_name = value.business_name.toUpperCase();
    value.trade_name = value.trade_name.toUpperCase();
    value.mobile_no = value.mobile_no.toString();

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          console.log("Volkswagen Jetta", value)
          this.bizService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Business Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Business Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.bizService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Business Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Business Record has not been updated.'
            );
          });
        }
      });
    }
  }


  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }

  businessNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      let obj = this.businessList.filter((x:any) => x.business_name.toLowerCase() == control.value.toLowerCase())[0]

      if (obj != undefined && !this.param) {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

  
  tradeNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      let obj = this.businessList.filter((x:any) => x.trade_name.toLowerCase() == control.value.toLowerCase())[0]

      if (obj != undefined && !this.param) {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 500);
  });

  autoConfig(status:any){
    if(status.status_id == 1) {
    }else{
      this.isActive = false
      this.btnCancel = "Exit"
    }

    if(status.activity.toLowerCase() == "updated"){
      this.isEdited = true
    }
  }

  showHis = false
  historyList:any = []
  historyBool = true;
  historyLabel = "Show Edit History"
  showHistory(){
    this.bizService.getHistory(this.param).subscribe(data => {
      this.historyList = data
    })
    
    if(this.historyBool){
      this.showHis = true
      this.historyLabel = "Hide Edit History"
      this.historyBool = false
    }else{
      this.historyLabel = "Show Edit History"
      this.showHis = false
      this.historyBool = true
    }
  }

  prevRecord: any = [];
  showModal = false
  prev_brgy_Name: string  =  ""
  curr_brgy_Name: string  =  ""

  compare(data:any){
   let statusObj = this.historyList.filter((x:any) => x.id === data.id).map((z:any) => z)[0]
   
   this.prevRecord = JSON.parse(statusObj.prev_record)
   console.log(this.prevRecord)
   this.prev_brgy_Name = this.brgyList.filter((x:any) => x.brgy_id == this.prevRecord.brgy_id).map((z:any)=> z.brgy_name)[0]
   this.curr_brgy_Name = this.brgyList.filter((x:any) => x.brgy_id == this.validateForm.value.brgy_id).map((z:any)=> z.brgy_name)[0]
   
   this.showModal = true
  }

  modalBack(){
    this.showModal = false
  }

  alertClose(){
    this.showHis = false
  }
}
