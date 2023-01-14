import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ElectedOfficialsService } from 'src/core/services/elected-officials/elected-officials.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-elected-officials-form',
  templateUrl: './elected-officials-form.component.html',
  styleUrls: ['./elected-officials-form.component.scss']
})
export class ElectedOfficialsFormComponent implements OnInit {

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
    private eoService: ElectedOfficialsService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
employeeList: any = []; 
listOfSelectedValue: any[] = [];
loading = true
  ngOnInit() {
    this.path = this.pathService.getPath();

    this.validateForm = this.fb.group({

      mayor_id: ['', [Validators.required]],
      vmayor_id: ['', [Validators.required]],
      term_from: [''],
      term_to: [''],
      type: 'Current',
      status: '',
      councillors: this.fb.array([])
    })
    this.eoService.getEmployees().subscribe(data => {
      this.employeeList = data;

      if(this.param){
        this.eoService.getById(this.param).subscribe(data => {

            console.log(data);
            this.validateForm.patchValue({
              mayor_id: String(data.mayor_id),
              vmayor_id: String(data.vmayor_id),
              term_from: data.term_from,
              term_to: data.term_to,
              status: data.status
            })

            const table = data.councillors
            table.forEach((element:any) => {
            this.councillor_dtl().push(this.fb.group({
              councillor_id: String(element.councillor_id)
            }))
            });
            this.loading = false
        })
      }else{

        this.loading = false
      }
    })


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
          this.eoService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Elected Officials Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Elected Officials Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.eoService.update(this.param, value).subscribe(async (data: any) => {
            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Elected Officials Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Elected Officials Record has not been updated.'
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

  mayorSelect(value:any){
  }

  
  addRow(){
    if (this.councillor_dtl.length <= 8)
    {
      this.councillor_dtl().push(this.councillorObj())
    }
  }
  deleteRow(i:number){
    this.councillor_dtl().removeAt(i);
  }
  councillor_dtl(): FormArray{
    return this.validateForm.get('councillors') as FormArray
  }

  councillorObj(){
    return this.fb.group({
      councillor_id: ['', [Validators.required]]
    })
  }
  clear(){
    this.councillor_dtl().clear()
    this.listOfSelectedValue = []
  }

}
