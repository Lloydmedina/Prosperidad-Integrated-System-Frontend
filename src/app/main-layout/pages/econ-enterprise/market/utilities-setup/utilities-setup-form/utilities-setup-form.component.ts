import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PropertyBrowserComponent } from 'src/app/main-layout/template/property-browser/property-browser.component';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { UtilitiesSetupService } from 'src/core/services/utilities-setup/utilities-setup.service';

@Component({
  selector: 'app-utilities-setup-form',
  templateUrl: './utilities-setup-form.component.html',
  styleUrls: ['./utilities-setup-form.component.scss']
})
export class UtilitiesSetupFormComponent implements OnInit {
  validateForm!: FormGroup;
  title = " Rate Setup"
  path: any;
  param: any;
  personList:any = []
  businessList: any = [];
  loading = true;
  btnCancel = "Cancel"

  utility_type = ['Water', 'Electricity']

  buttonTitle: any;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modalService: NzModalService,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private utiService: UtilitiesSetupService,
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

xPath = ""
locStore:any = ""
symbol = ""
checked = false
  ngOnInit() { 
    this.path = this.pathService.getPath();
      this.locStore = localStorage.getItem("utility-type") == null ? "" :  localStorage.getItem("utility-type")
      this.xPath = this.locStore.toString().charAt(0).toUpperCase() + this.locStore.toString().slice(1)
      this.title = this.xPath + this.title
      if(this.locStore == "water"){
        this.symbol = "cu.m"
      }else{
        this.symbol = "kWh"
      }

      this.validateForm = this.fb.group({
        property_id: ['', [Validators.required]],
        property_name: ['', [Validators.required]],
        utility_type: ['', [Validators.required]],
        utilities: this.fb.array([]),
        min: null,
        max: null,
        step: null,
        count: null,
        isChecked: ''
      })
  
      this.validateForm.patchValue({
        utility_type: this.xPath
      })
      this.selectType(this.xPath)

      if(this.param){
        this.buttonTitle = "Update & Exit"
        this.utiService.getById(this.param).subscribe(data => {
          this.checked = false
          console.log(data)

          this.validateForm.patchValue({
            property_id: data.property_id,
            property_name: data.property_name,
            utility_type: data.utility_type,
            isChecked: data.isChecked,
            min: data.min,
            max: data.max,
            step: data.step,
            count: data.count,
          })
          this.validateForm.clearValidators()

          if(data.isChecked == 'true')
          {
            this.checked = true
          }

          if(data.utilities.length > 0){
            const utdtl = data.utilities
            utdtl.forEach((element:any) => {
              this.utilityDtlArray().push(this.fb.group({
                rate_type: element.rate_type,
                min_value: element.min_value,
                max_value: element.max_value,
                rate: element.rate

              }))

            });
          }

          this.loading = false  
        })
      }else{
        this.buttonTitle = "Save & Exit"
        this.loading = false  
      }
  }

  
  submitForm(value:any){
    console.log(value)
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }


    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.utiService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3] + "/" + this.locStore]);
            if (this.locStore == 'water') {
              await this.notification.create(
                "success",
                'Successfully Saved',
                'Water Rate has successfully saved.'
              );
            } else {
              await this.notification.create(
                "success",
                'Successfully Saved',
                'Electricity Rate has successfully saved.'
              );
            }
          },
          async error => {
           if (this.locStore == 'water') {
            await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Water Rate has not been saved.'
            );
           } else {
            await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Electricity Rate has not been saved.'
            );
           }
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.utiService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3] + "/" + this.locStore ]);
            if (this.locStore == 'water') {
              await this.notification.create(
                "success",
                'Successfully Updated',
                'Water Rate has successfully updated.'
              );
            } else {
              await this.notification.create(
                "success",
                'Successfully Updated',
                'Electricity Rate has successfully updated.'
              );
            }
          },
          async error => {
            if (this.locStore == 'water') {
              await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Water Rate has not been updated.'
              );
            } else {
              await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Electricity Rate has not been updated.'
              );
            }
           
          });
        }
      });
    }
  }


  cancel(e: MouseEvent){
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]+"/"+this.path[3] + "/" + this.locStore ]);
  }

  propertyName = ""
  browseProperty(){
  
    const modal = this.modalService.create({
        nzTitle: 'Property Browse',
        nzContent: PropertyBrowserComponent,
        nzWidth: 1500,
        nzMaskClosable: false
      });
      
      modal.afterClose.subscribe(data => {
        
        if(data != undefined){
          console.log(data)
          this.validateForm.patchValue({
            property_id: data.key,
            property_name: data.name
          })
        }
      })
    }
rateType = ""
ratePer: any = []
    selectType(val:any){
      if(val == "Water"){
        this.rateType = "cu.m"
      }else if(val == "Electricity")
      {
        this.rateType = "kWh"
      }

      this.ratePer = ['Daily', this.rateType]
    }


    utilityDtlArray() : FormArray{
      return this.validateForm.get('utilities') as FormArray
    }

    utilityDtlFb() : FormGroup{
      return this.fb.group({
        rate_type: this.symbol,
        min_value: 0,
        max_value: 0,
        rate: 0
      })
    }

    addUtility(){
      console.log(this.ratePer)
      this.utilityDtlArray().push(this.utilityDtlFb())
    }
    removeUtility(i:number){
      this.utilityDtlArray().removeAt(i)
    }

    autoGen(){
      this.utilityDtlArray().clear()
      let min:number = Number(this.validateForm.value.min)
      let max:number  = Number(this.validateForm.value.max)
      let count:number  = Number(this.validateForm.value.count)
      let step:number  = Number(this.validateForm.value.step)
      let consTep:number = step
      for(let i = 1; i <= count; i++){
        if(i == count){
          step = max
        }
        this.utilityDtlArray().push(this.fb.group({
          rate_type: this.symbol,
          min_value: min,
          max_value: step,
          rate: 0
        }))
        min += Number(consTep)
        step += Number(consTep)
      }
      this.validateForm.patchValue({

      })
    }
    checkChange(value:any){
      if(value){
        this.validateForm.patchValue({
          isChecked: 'true'
        })
      }else{
        this.validateForm.patchValue({
          isChecked: 'false'
        })
      }
    }
}
