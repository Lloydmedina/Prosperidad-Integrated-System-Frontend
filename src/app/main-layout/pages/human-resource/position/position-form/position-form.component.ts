import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PositionService } from 'src/core/services/position/position.service';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.css']
})
export class PositionFormComponent implements OnInit {

  validateForm!: FormGroup;
  personData: any = []
  isAdd: boolean = true
  title = ""
  path: any;
  param: any;
  deptList:any = []
  posList:any = []
  salaryGradeList: any =[]
  posTypeList: any = []
  empTypeList:any = []
  loading = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private posService: PositionService,
    private pathService: PathsegmentService,
    private drawerService: NzDrawerService,
    // private personService: PersonService
    ) {this.route.params.subscribe(zxc => {
      this.param = zxc['id']
    }) }
    feesTypeDefault = "1"
    checkSame = false
  ngOnInit() {
    this.path = this.pathService.getPath();
    
    this.validateForm = this.fb.group({
      dept_id: ['', [Validators.required]],
      position_type_id: ['', [Validators.required]],
      salary_grade: [''],
      position_name: ['', [Validators.required]],
      position_desc: '',
      position_id: ''
    })
        this.posService.getDropdown().subscribe(data => {
          console.log(data)
          this.deptList = data[0].department
          this.posTypeList = data[0].posType
          this.salaryGradeList = data[0].salaryGrade
        
          this.loading = false  
          
        })

        if(this.param){
          this.posService.getById(this.param).subscribe(data => {
            console.log(data)
            this.validateForm.patchValue({
              dept_id: data.dept_id,
              position_type_id: String(data.position_type_id),
              position_name: data.position_name,
              position_desc: data.position_desc,
              salary_grade: String(data.salary_grade)
            })

          })

          
        }
    }


    submitForm(value:any){
      for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
  
        console.log(value)
      if(!this.param)
      {
        this.modal.confirm({
          nzTitle: 'Do you really want to Save this record?',
          nzOnOk: () => {
            this.posService.insert(value).subscribe(async (data: any) => {
              console.log(data)
  
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Saved',
                'Fees Charges Record has successfully saved.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Fees Charges Record has not been saved.'
              );
            });
          }
        })
      }else{
        this.modal.confirm({
          nzTitle: 'Do you really want to Update this record?',
          nzOnOk: () => {
            this.posService.update(this.param, value).subscribe(async (data: any) => {
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Updated',
                'Fees Charges Record has successfully updated.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Fees Charges Record has not been updated.'
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
