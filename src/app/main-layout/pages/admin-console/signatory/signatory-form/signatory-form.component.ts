import { DYNAMIC_TYPE } from '@angular/compiler';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { of } from 'rxjs';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SignatoryService } from 'src/core/services/signatory/signatory.service';

@Component({
  selector: 'app-signatory-form',
  templateUrl: './signatory-form.component.html',
  styleUrls: ['./signatory-form.component.css']
})
export class SignatoryFormComponent implements OnInit {


  validateForm!: FormGroup;
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  title = ""
  path: any;
  param: any;
  deptList:any = []
  listOfType = ['Checked By', 'Approved By', 'Prepared By']
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private signatoryService: SignatoryService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
sigTypeList:any = []
assignTypeList: any = []
formList: any = []
formDropdown: any = []
loading = true
  ngOnInit() {
    this.path = this.pathService.getPath()
    
    this.validateForm = this.fb.group({
      signatory_main_id: [''],
      dept_id: ['', [Validators.required]],
      dept_name: [''],
      signatory_name: [''],
      form_id:['',[Validators.required]],
      status: [''],
      signatoryDetails: this.fb.array([])
    })
    
    this.signatoryService.getDept().subscribe(data => {
      this.deptList = data
      this.signatoryService.getDropdown().subscribe(drops => {
        this.sigTypeList = drops[0].sig_type
        this.assignTypeList = drops[1].assign_type
        this.formList = drops[2].forms
        this.loading = false
      })
      
    })

    if(this.param){
      this.signatoryService.getById(this.param).subscribe(obj => {
        

        this.validateForm.patchValue({
          signatory_main_id: obj.signatory_main_id,
          dept_id: obj.dept_id,
          dept_name: obj.dept_name,
          signatory_name: obj.signatory_name,
          status: obj.status,
          form_id: obj.form_id
        })

        const tbl = obj.signatoryDetails
        tbl.forEach((element:any) => {
          this.signatory_dtl().push(this.fb.group({
            assign_type_id: element.assign_type_id,
            signatory_type_id: element.signatory_type_id,
          }))
        });
       
      })
    }
  }

  deptSelect(id:any){
    this.signatory_dtl().clear();
    if(id){
      this.formDropdown = this.formList.filter((x:any) => x.dept_id == id)
      let dept = this.deptList.filter((x:any) => x.dept_id == id)[0]
      this.validateForm.patchValue({
        form_id: '',
        dept_name: dept.short_desc,
      })
    }
  }

  addRow(){
    this.signatory_dtl().push(this.signatories())
  }
  deleteRow(i:number){
    this.signatory_dtl().removeAt(i);
  }
  signatory_dtl(): FormArray{
    return this.validateForm.get('signatoryDetails') as FormArray
  }

  signatories(){
    return this.fb.group({
      assign_type_id: [''],
      signatory_type_id: ['', [Validators.required]],
    })
  }

  submitForm(value: any){

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }

    if(!this.param)
    {
      this.modal.confirm({
        nzTitle: 'Do you really want to Save this record?',
        nzOnOk: () => {
          this.signatoryService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Signatory Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Signatory Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.signatoryService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Signatory Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Signatory Record has not been updated.'
            );
          });
        }
      });



    }
  }
  cancel(e: MouseEvent): void {
    e.preventDefault();
    this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
  }

  addItem(val:any){
    this.listOfType.push(val.value)
  }

  formSelect(id:any){
    if(id){
      if(this.formDropdown.length > 0){
        let form = this.formDropdown.filter((x:any) => x.form_guid == id)[0]
        this.validateForm.patchValue({
          signatory_name: form.form_name + " Signatory"
        })
      }
  
      if(!this.param)
      {
        this.signatory_dtl().push(this.fb.group({
          signatory_type_id: 1,
          assign_type_id: 1
        }))
        this.signatory_dtl().push(this.fb.group({
          signatory_type_id: 5,
          assign_type_id: 4
        }))
      }
    }
  }
}

