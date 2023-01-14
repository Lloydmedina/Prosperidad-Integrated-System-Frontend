import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DepartmentService } from 'src/core/services/department-service/department.service';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
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

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private deptService: DepartmentService,
    private domService: DomainService,
    private pathService: PathsegmentService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    domain: any;
    employeeList: any = [];
    loading = true
  ngOnInit() {

    this.validateForm = this.fb.group({
      dept_id: '',
      domain_id: ['', [Validators.required]],
      prefix: ['', [Validators.required]],
      dept_code: ['', [Validators.required]],
      dept_name: ['', [Validators.required]],
      short_desc: [''],
      type: ['', [Validators.required]],
      status: '',
      dept_head: this.fb.group({
        head_employee_id: [''],
        asst_employee_id: ['']
      })
    })

    this.path = this.pathService.getPath();
    this.domService.getDomainList().subscribe(data =>{
        this.domainList = data
      this.deptService.getEmployees().subscribe(employees =>{
        this.employeeList = employees

        if(this.param){

          this.deptService.getById(this.param).subscribe(obj =>{
            console.log(obj)
            if(obj.dept_head == null) obj.dept_head = []
            this.validateForm.patchValue({
              domain_id: obj.domain_id,
              prefix: obj.prefix,
              dept_code: obj.dept_code,
              dept_name: obj.dept_name,
              short_desc: obj.short_desc,
              type: obj.type,
              status: obj.status,
              dept_head : {
                head_employee_id: obj.dept_head.head_employee_id === null ? '': obj.dept_head.head_employee_id ,
                asst_employee_id: obj.dept_head.asst_employee_id == null ? '': obj.dept_head.asst_employee_id
              }
            })
    
    
            this.loading = false
          })
          
        }else{
          
        this.loading = false
        }
      })
    })

    
  }

  domainSelect(id:any){
    if(id){
      this.deptService.getPrefix(id).subscribe(data => {
          this.validateForm.patchValue({
            prefix: data.prefix
          })
      })
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
          this.deptService.insert(value).subscribe(async (data: any) => {
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
          this.deptService.update(this.param, value).subscribe(async (data: any) => {
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

}
