import { Component, Input, OnInit, SimpleChange, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BarangayOfficialService } from 'src/core/services/barangay-official-service/barangay-official.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { DepartmentService } from 'src/core/services/department-service/department.service';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-barangay-official-form',
  templateUrl: './barangay-official-form.component.html',
  styleUrls: ['./barangay-official-form.component.css']
})
export class BarangayOfficialFormComponent implements OnInit {

  validateForm!: FormGroup;
  // captchaTooltipIcon: NzFormTooltipIcon = {
  //   type: 'info-circle',
  //   theme: 'twotone'
  // };
  title = ""
  path: any;
  param: any;
  domainList:any = []
  listOfType = ['City', 'Prepared By']
  brgyName: any;
  btnCancelExit = "Cancel"
  prev_id: any;
  official_id: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private brgyService: BarangayOfficialService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      console.log(zxc)
      this.param = zxc['id']
      this.brgyName = zxc['brgy']
      this.official_id = zxc['official_id']
    }) }
    domain: any;
    employeeList: any = [];
  ngOnInit() {
    this.employeeList = [];
    this.path = this.pathService.getPath();
    this.btnCancelExit = "Cancel"
      this.brgyService.getEmployees().subscribe(employees =>{
        this.employeeList = employees

        if(this.param){
          this.brgyService.getById(this.param).subscribe(obj =>{
            this.validateForm.patchValue({
              official_id: this.official_id,
              brgy_id: obj.brgy_id,
              status: obj.status,
            })
          })
       }
    })


    this.validateForm = this.fb.group({
      brgy_id: '',
      official_id: ['', [Validators.required]],
      status: ['']
    })
  }
  
  ngOnChanges(changes: SimpleChange){
    console.log(changes)
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
          this.brgyService.insert(value).subscribe(async (data: any) => {
            console.log(data)

            this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
            await this.notification.create(
              "success",
              'Successfully Saved',
              'Barangay Officials Record has successfully saved.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Barangay Officials Record has not been saved.'
            );
          });
        }
      })
    }else{
      this.modal.confirm({
        nzTitle: 'Do you really want to Update this record?',
        nzOnOk: () => {
          this.brgyService.update(this.param, value).subscribe(async (data: any) => {
            this.btnCancelExit = "Exit"
            this.prev_id = this.param
            await this.notification.create(
              "success",
              'Successfully Updated',
              'Barangay Officials Record has successfully updated.'
            );
          },
          async error => {
           await this.notification.create(
              "error",
              'Unsuccessfully Saved',
              'Barangay Officials Record has not been updated.'
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
}
