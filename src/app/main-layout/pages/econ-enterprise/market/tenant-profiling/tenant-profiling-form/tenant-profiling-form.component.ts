import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BusinessBrowseComponent } from 'src/app/main-layout/template/business-browse/business-browse.component';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { PropertyBrowserComponent } from 'src/app/main-layout/template/property-browser/property-browser.component';
import { RentalApplicationBrowseComponent } from 'src/app/main-layout/template/rental-application-browse/rental-application-browse.component';
import { BusinessService } from 'src/core/services/business/business.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';

@Component({
  selector: 'app-tenant-profiling-form',
  templateUrl: './tenant-profiling-form.component.html',
  styleUrls: ['./tenant-profiling-form.component.css']
})
export class TenantProfilingFormComponent implements OnInit {
  validateForm!: FormGroup;
  title = ""
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  btnCancel = "Cancel"
  buttonTitle: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private tenantService: TenantProfilingService,
    private personService: PersonService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }

    lgu_config: any;
    prov:any = "";
    citmun: any = "";
    brgyList: any =[];
    isActive = true;
    isEdited = false;
    tenantType = ['Business', 'Person']


  ngOnInit() {
    this.loading = true
    this.path = this.pathService.getPath();

    if(this.param){
      this.buttonTitle = "Update & Exit"
      this.tenantService.getById(this.param).subscribe(data => {
        console.log(data);
        this.validateForm.patchValue({
          tenant_type: data.tenant_type,
          tenant_id: data.tenant_id,
          tenant_name: data.tenant_name,
          tenant_contact: data.tenant_contact,
          tenant_address: data.tenant_address
        })
        const dtl_tbl = data.tenant_profile_dtl

        if(dtl_tbl.length > 0){
          let index = 0;
          dtl_tbl.forEach((el:any) => {
            this.tenantDtlArray().push(this.fb.group({
              dtl_id: el.dtl_id,
              main_id: el.main_id,
              property_name: el.propertyInfo.property_name,
              property_id: el.property_id,
              area: el.propertyInfo.property_area,
              rental_amount: el.rental_amount,
              section: el.propertyInfo.section,
              date_start: el.date_start,
              date_end: el.date_end,
              transaction_date: new Date(el.transaction_date),
              sub_tenant: this.fb.array([])
            }))

            if(el.sub_tenant.length != null && el.sub_tenant.length > 0){
              el.sub_tenant.forEach((sub:any) => {
                this.tenantDtlArray().at(index).value.sub_tenant.push({
                  tenant_id:  sub.tenant_id,
                  tenant_name: sub.tenant_name,
                  dtl_id: sub.dtl_id
                })
              });
            }
            index++
          });
        }

        this.loading = false;
      })
    }else{
      this.buttonTitle = "Save & Exit"
      this.loading = false;
    }
   
    this.validateForm = this.fb.group({
    tenant_type: ["Person",[Validators.required]],
    tenant_id: ['', [Validators.required]],
    tenant_name: ['', [Validators.required]],
    tenant_contact:[''],
    tenant_address: [''],
    tenant_profile_dtl: this.fb.array([])
    })

    this.loading = false
  }

  submitForm(value:any){
    
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    value.tenant_contact = value.tenant_contact.toString();
    console.log("VALUE", value)

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.tenantService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Tenant Profiling Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Tenant Profiling Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.tenantService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Tenant Profiling Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Tenant Profiling Record has not been updated.'
            );
          });
        }
      });
    }
  }


  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3]]);
  }

  browseTenant(val:any, opt:string){
    if(opt){
        if(opt.toLowerCase() == 'person'){
          this.openPersonBrowse(val)
        }else if(opt.toLocaleLowerCase() == 'business'){
          if(val != 'sub'){
            this.openBusinessBrowse()
          }else{
          this.openPersonBrowse(val)
          }

        }
    }else{
        this.validateForm.controls['tenant_type'].markAsDirty()
        this.validateForm.patchValue({
          tenant_type: null
        })
    }
  }


  errorMessage: any = ""
  showTitle = false
  openPersonBrowse(val:any): void {
    this.showTitle = false
    const drawerRef = this.drawerService.create({
      nzTitle: 'Rental Application List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: RentalApplicationBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log("AY OKEY", data)
      if (data) {
        this.modalAfterClose(data, val)
      }
    });

  }

modalAfterClose(data:any, val:any){
  // let personName = data.last_name + ", " + data.first_name + " " + data.middle_name
  let personName = data.applicant_name
  if(val != 'sub'){
    this.validateForm.patchValue({
      // tenant_id: data.person_guid,
      tenant_id: data.applicant_id,
      tenant_name: personName,
      // tenant_address: "Brgy. " + data.brgy_name + ", " +data.city_mun_name + ", " + data.province_name
      tenant_address: data.address
    })
  }else{
    let tt = this.propData.sub_tenant.filter((x:any) => x.tenant_id == data.applicant_id).map((z:any) => z)[0]
    if(tt != null)
    {
      this.errorMessage = personName + " is already in the list!"
      this.showTitle = true
    }else{
      this.tenantDtlArray().at(this.propIndex).value.sub_tenant.push({
        tenant_id:  data.applicant_id,
        tenant_name: personName
      })
    }
  }
}
  openBusinessBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Business List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: BusinessBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log(data)
      if (data) { 
        this.tenantService.getBrgy(data.brgy_id).subscribe(lgu => {
          console.log(lgu)
          this.validateForm.patchValue({
            tenant_id: data.business_id,
            tenant_name: data.business_name,
            tenant_contact: data.tel_no,
            tenant_address: data.building + ", " + data.street + ", Brgy. " + data.brgy + ", " + lgu.CITY + ", " + lgu.PROVINCE
          })
        })   
      }
    });
  }

  selectType(){
    this.validateForm.patchValue({
      tenant_id: null,
      tenant_name: null,
      tenant_address: null,
      tenant_contact: null
    })
  }

  
  tenantDtlArray(): FormArray{
    return this.validateForm.get("tenant_profile_dtl") as FormArray
  }

  tenantDtl(data?:any): FormGroup{
    return this.fb.group({
      property_name: data.name,
      property_id: data.key,
      area: data.area,
      rental_amount: data.amt,
      section: data.section,
      date_start: null,
      date_end: null,
      transaction_date: new Date(),
      sub_tenant: this.fb.array([])
    })
  }

ix: number = 0;
  addFloor(){
    this.browseProperty(this.ix)
    this.ix++
  }


  removeProp(index:number){
    this.tenantDtlArray().removeAt(index);
    
    this.ix--
  }

propAlertMsg:string = ""
propAlert = false
browseProperty(index:number, upData:any = undefined){
  
  this.propAlert = false
  const modal = this.modalService.create({
      nzTitle: 'Property Browse',
      nzContent: PropertyBrowserComponent,
      nzWidth: 1500,
      nzMaskClosable: false
    });
    
    modal.afterClose.subscribe(data => {
      
      if(data != undefined){
        let doesExist = false
       this.tenantDtlArray().controls.forEach(element => {
          if(element.value.property_id == data.key){
            // this.modal.error({
            //   nzTitle: 'Duplicate Property',
            //   nzContent: data.name.toUpperCase() + " is already on the list..."
            // });
            this.propAlertMsg =  data.name.toUpperCase() + " is already in the list!"
            this.propAlert = true
            doesExist = true
          }
        })

        if(!doesExist){
        if(upData != undefined){
        this.tenantDtlArray().at(index).patchValue({
          property_name: data.name,
          property_id: data.key,
          area: data.area,
          rental_amount: data.amt,
          section: data.section
        })
        }else{
          this.tenantDtlArray().push(this.tenantDtl(data));
        }
       
        }
        console.log(this.validateForm.value)
      }
    })
  }
  modalShow = false
  propIndex:number = 0;
  propData: any = [];
  tenantTitle = ""
  viewTenant(event:any, index:number, data:any){
    console.log(event)
    this.propIndex = index;
    this.propData = data
    this.tenantTitle ="Property - " + data.property_name.toUpperCase()
    this.modalShow =true
  }

  modalOk(){
    this.modalShow = false
  }
  removeTenant(rIndex: number){
    this.tenantDtlArray().at(this.propIndex).value.sub_tenant.splice(rIndex, 1)
    // this.tenantDtlArray().at(this.propIndex).value.sub_tenant.removeAt(rIndex)
  }


}


