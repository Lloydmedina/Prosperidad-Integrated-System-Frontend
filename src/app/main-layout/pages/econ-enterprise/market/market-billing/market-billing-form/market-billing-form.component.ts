import { Component, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PropertyBrowserComponent } from 'src/app/main-layout/template/property-browser/property-browser.component';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';

@Component({
  selector: 'app-market-billing-form',
  templateUrl: './market-billing-form.component.html',
  styleUrls: ['./market-billing-form.component.scss']
})
export class MarketBillingFormComponent implements OnInit {

  validateForm!: FormGroup;
  
  defaultCheckedKeys: any = [];
  defaultSelectedKeys: any = [];
  valueChecked = [];
treeNode: any = {}
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  isAdd: boolean = true
  title = ""
  path: any;
  param: any;
  loading = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private modalService: NzModalService,
    private modal: NzModalService,
    private route: ActivatedRoute,
    private pathService: PathsegmentService,
    private notification: NzNotificationService,
    private billingService: MarketBillingService,
    private tenantService: TenantProfilingService,
    private propService: PropertySetupService,
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    feesTypeDefault = "1"

    waterDate:Date[] = []
    electDate:Date[] = []
    recordStatus = "Draft"
  ngOnInit() {
    this.path = this.pathService.getPath();


    if(this.param){
      this.billingService.getById(this.param).subscribe(data => {
        console.log(data)
        this.assignUtilities(data.property_id)
        this.getTenantProfile(data.tenant_profile_id)
        this.propService.getById(data.property_id).subscribe((prop:any) => {
          this.recordStatus = data.status
          this.validateForm.patchValue({
            billing_id: data.billing_id,
            billing_date: data.billing_date,
            billing_no: data.billing_no,
            property_id: data.property_id,
            property_name: prop.property_name,
            tenant_name: this.tenantName,
            tenant_profile_id: data.tenant_profile_id,
            bill_amount: parseFloat(String(data.bill_amount)).toFixed(2),
            due_date: data.due_date,
            billing_water: {
              date_from: data.billing_water.date_from,
              date_to: data.billing_water.date_to,
              prev_reading: data.billing_water.prev_reading,
              curr_reading: data.billing_water.curr_reading,
              consumption: data.billing_water.consumption,
              rateper:  0,
              rate:  parseFloat(String(data.billing_water.rate)).toFixed(2)
            },
            billing_electricity: {
              date_from: data.billing_electricity.date_from,
              date_to: data.billing_electricity.date_to,
              prev_reading: data.billing_electricity.prev_reading,
              curr_reading: data.billing_electricity.curr_reading,
              consumption: data.billing_electricity.consumption,
              rateper:  0,
              rate:  parseFloat(String(data.billing_electricity.rate)).toFixed(2)
            }
          })
          this.waterDate = [data.billing_water.date_from, data.billing_water.date_to]
          this.electDate = [data.billing_electricity.date_from, data.billing_electricity.date_to]
          this.computeWater()
          this.computeElectric()
        })
      })

    }
    this.validateForm = this.fb.group({
      billing_id: [''],
      billing_date: new Date(),
      billing_no: ['', [Validators.required]],
      property_id: ['', [Validators.required]],
      property_name: ['', [Validators.required]],
      tenant_name: ['', [Validators.required]],
      tenant_profile_id: ['',[Validators.required]],
      bill_amount: ['', [Validators.required]],
      due_date: new Date(),
      billing_water: this.fb.group({
        date_from: null,
        date_to: null,
        prev_reading: [0, [Validators.required]],
        curr_reading: [0, [Validators.required]],
        consumption: [0, [Validators.required]],
        rateper: [0, [Validators.required]],
        rate: [0, [Validators.required]]
      }),
      billing_electricity: this.fb.group({
        date_from: null,
        date_to: null,
        prev_reading: [0, [Validators.required]],
        curr_reading: [0, [Validators.required]],
        consumption: [0, [Validators.required]],
        rateper: [0, [Validators.required]],
        rate: [0, [Validators.required]]
      })
    })



    this.loading = false 
  }

  postRecord(){
    this.modal.confirm({
      nzTitle: 'Do you really want to Post this record?',
      nzOnOk: () => {
        this.billingService.post(this.param).subscribe(async (data: any) => {
          this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
          await this.notification.create(
            "success",
            'Successfully Posted',
            'Record has successfully posted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Posted',
            'Record has not been posted.'
          );
        });
     }
    })
  }


  submitForm(value:any){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.billingService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Rent & Utilities Billing has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Rent & Utilities Billing has not been saved.'
            );
          });
        }
      })
    }
    else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.billingService.update(this.param, value).subscribe(async (data: any) => {
          this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] + "/" + this.path[3]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Rent & Utilities Billing has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Rent & Utilities Billing has not been updated.'
            );
          });
        }
      });
    }
  }
  

  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2] +"/"+ this.path[3]]);
  }

  waterUtilSetting:any[] = []
  electUtilSetting:any[] = []
  browseProperty(){
  
    const modal = this.modalService.create({
        nzTitle: 'Property Browse',
        nzContent: PropertyBrowserComponent,
        nzWidth: 1500,
        nzMaskClosable: false,
      });
      
      modal.afterClose.subscribe(data => {
        
        if(data != undefined){
          console.log(data)
        
             this.assignUtilities(data.key)

            this.validateForm.patchValue({
              property_name: data.name,
              property_id: data.key,
              tenant_name: data.tenant,
              tenant_profile_id: data.tenant_profile_id,
              bill_amount: parseFloat(String(data.amt)).toFixed(2)
            })
        
        }
      })
  }

  tenantName = ""
  getTenantProfile(id: any){
    this.tenantService.getById(id).subscribe(x=>{
      this.tenantName = x.tenant_name
    })
  }
  assignUtilities(id:any){
    this.billingService.getUtilities(id).subscribe(x => {
      console.log("WATER INUTIL",x[0].waterUtil)
      this.waterUtilSetting = x[0].waterUtil
      this.electUtilSetting = x[0].electricUtil
   })
  }

  waterRange(dateRange: Date[]){
    this.validateForm.patchValue({
      billing_water:{
        date_from : dateRange[0],
        date_to: dateRange[1]
      }
    })
    console.log(this.validateForm)
  }

  electricityRange(dateRange: Date[]){
    this.validateForm.patchValue({
      billing_electricity:{
        date_from : dateRange[0],
        date_to: dateRange[1]
      }
    })
  }


  computeWater(){
    let prev = this.validateForm.value.billing_water.prev_reading
    let curr = this.validateForm.value.billing_water.curr_reading
    console.log("BUSHET", prev)
    if(prev < curr){
      let cons = curr - prev
      console.log("CONS", cons)
      let rte = this.waterUtilSetting.filter((x:any) => cons >= x.min_value && cons <= x.max_value)[0].rate
      console.log("RTE", rte)
      if(this.param){
        this.validateForm.patchValue({   
          billing_water:{
         rateper: parseFloat(String(rte)).toFixed(2),
         }
       })
      }else{
        this.validateForm.patchValue({
          billing_water:{
            consumption : parseFloat(String(cons)).toFixed(2),
            rateper: parseFloat(String(rte)).toFixed(2),
            rate: parseFloat(String(cons * rte)).toFixed(2)
          }
        })
      }
    }
  }

  computeElectric(){
    let prev = this.validateForm.value.billing_electricity.prev_reading
    let curr = this.validateForm.value.billing_electricity.curr_reading
    if(prev < curr){
      let cons = curr - prev
      let rte = this.electUtilSetting.filter((x:any) => cons >= x.min_value && cons <= x.max_value)[0].rate
      console.log(rte)
      if(this.param){
        this.validateForm.patchValue({   
           billing_electricity:{
          rateper: parseFloat(String(rte)).toFixed(2),
          }
        })
      }else{
      this.validateForm.patchValue({
        billing_electricity:{
          consumption : parseFloat(String(cons)).toFixed(2),
          rateper: parseFloat(String(rte)).toFixed(2),
          rate: parseFloat(String(cons * rte)).toFixed(2)
        }
      })
    }
    }
  }

  
}
