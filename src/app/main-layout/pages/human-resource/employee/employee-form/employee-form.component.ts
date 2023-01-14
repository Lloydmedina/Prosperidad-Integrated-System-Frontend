import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd/core/tree';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonsBrowseComponent } from 'src/app/main-layout/template/persons-browse/persons-browse.component';
import { EmployeeService } from 'src/core/services/employee/employee.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  validateForm!: FormGroup;
  personData: any = []
  isAdd: boolean = true
  title = ""
  path: any;
  param: any;
  deptList:any = []
  posList:any = []
  empTypeList:any = []
  loading = true;

  assignedPos: any = []
  payrollPos: any = []
  buttonTitle: any = 'Save & Exit'

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private viewContainerRef: ViewContainerRef,
    private modal: NzModalService,
    private notification: NzNotificationService,
    private empService: EmployeeService,
    private personService: PersonService,
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
      employee_id: '',
      employee_name: ['', [Validators.required]],
      person_guid: ['', [Validators.required]],
      employee_type_id: ['', [Validators.required]],
      emp_account_no :'',
      email_address: '',
      is_same_payroll: '',
      date_hired: [null, [Validators.required]],
      person_position: this.fb.group({
        person_id: '',
        position_id: ['', Validators.required],
        status: ''
      }),
      person_dept: this.fb.group({
        person_id: '',
        dept_id: ['', Validators.required],
        status: ''
      }),
      person_payroll_position: this.fb.group({
        person_id: '',
        position_id: ['', Validators.required],
        status: ''
      }),
      person_payroll_dept: this.fb.group({
        person_id: '',
        dept_id: ['', Validators.required],
        status: ''
      })
    })
        this.empService.getDropdown().subscribe(data => {
          this.deptList = data[0].department
          this.posList = data[0].position
          this.empTypeList = data[0].employeeType

          this.loading = false
      })

      if(this.param){
          this.buttonTitle = 'Update & Exit'
          this.empService.getById(this.param).subscribe(data => {
          const deptID = data.person_dept?.dept_id
          console.log("DATA", data)
          this.validateForm.patchValue({
            employee_id: data.employee_id,
            employee_name:   data.employee_name,
            person_guid:  data.person_guid,
            employee_type_id: String(data.employee_type_id),
            emp_account_no :  data.emp_account_no,
            is_same_payroll: data.is_same_payroll,
            date_hired:  data.date_hired,
            
            person_payroll_dept: {
              person_id:  data.person_dept.person_id,
              dept_id:  String(data.person_dept.dept_id),
              status:  data.person_dept.status
            }

          })

          this.empService.getDropdown().subscribe(data => {
            this.deptList = data[0].department
            this.posList = data[0].position
            this.empTypeList = data[0].employeeType
  
            let pos = this.deptList.filter((x:any) => x.dept_id == deptID).map((z:any) => z.positions)[0]
            this.posList = pos
            console.log("laki3", deptID)
          })

          if (data.person_dept.dept_id != null) {
            this.validateForm.patchValue({
              person_dept: {
                person_id:  data.person_dept.person_id,
                dept_id:  data.person_dept.dept_id.toString(),
                status:  data.person_dept.status
              },
            })
          }

          if (data.person_position.position_id != null) {
            this.validateForm.patchValue({
              person_position: {
                person_id:  data.person_position.person_id,
                position_id:  data.person_position.position_id.toString(),
                status:  data.person_position.status
              },
            })
          }

          if (data.person_position.position_id != null) {
            this.validateForm.patchValue({
              person_payroll_position: {
                person_id:  data.person_position.person_id,
                position_id:  data.person_position.position_id.toString(),
                status:  data.person_position.status
              }
            })
          }

          this.personService.getPersonGUID(data.person_guid).subscribe(person => {
            this.checkSame = (data.is_same_payroll == 'true')
            this.personData = person[0]
          })
          // this.selectDept(data.person_dept.dept_id.toString())
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
            this.empService.insert(value).subscribe(async (data: any) => {
              console.log(data)
  
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Saved',
                'Employees Record has successfully saved.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Employees Record has not been saved.'
              );
            });
          }
        })
      }else{
        this.modal.confirm({
          nzTitle: 'Do you really want to Update this record?',
          nzOnOk: () => {
            this.empService.update(this.param, value).subscribe(async (data: any) => {
              this.router.navigate(["/"+this.path[0]+"/"+this.path[1]+"/"+this.path[2]]);
              await this.notification.create(
                "success",
                'Successfully Updated',
                'Employees Record has successfully updated.'
              );
            },
            async error => {
             await this.notification.create(
                "error",
                'Unsuccessfully Saved',
                'Employees Record has not been updated.'
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

    
  openPersonBrowse(): void {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Persons List',
      nzFooter: 'Footer',
      nzPlacement: 'bottom',
      nzHeight: 800,
      nzContent: PersonsBrowseComponent,
      nzContentParams: {
        // value: this.value
      }
    });

    drawerRef.afterClose.subscribe(data => {
      console.log("DATAAA1", data)
      if(data){
        this.popPersonData(data)
        console.log("DATAAA2", data)
      }
    });
  }

  popPersonData(data:any){
    this.personData = data
    if (data.middle_name != null && data.middle_name != "") {
      this.validateForm.patchValue({
        person_guid: data.person_guid,
        employee_name: String(data.last_name + ", " + data.first_name + " " + data.middle_name.charAt(0) + ". ").toUpperCase(),
        person_dept:{
          person_id : data.person_guid
        },
        person_position:{
          person_id: data.person_guid
        },
        person_payroll_dept:{
          person_id : data.person_guid
        },
        person_payroll_position:{
          person_id: data.person_guid
        }
      
      })
    } else {
      this.validateForm.patchValue({
        person_guid: data.person_guid,
        employee_name: String(data.last_name + ", " + data.first_name).toUpperCase(),
        person_dept:{
          person_id : data.person_guid
        },
        person_position:{
          person_id: data.person_guid
        },
        person_payroll_dept:{
          person_id : data.person_guid
        },
        person_payroll_position:{
          person_id: data.person_guid
        }
      
      })
    }
  }

  selectDept(val:any){
    this.posList = []
    this.validateForm.patchValue({
      person_position:{
        position_id: ''
      },
      person_payroll_position:{
        position_id: ''
      }
    })
   let pos = this.deptList?.filter((x:any) => x.dept_id == val).map((z:any) => z.positions)[0]
   this.posList = pos
  }

  selectPosition(val:any){
    
  }

  checkChange(val:boolean){
    this.validateForm.patchValue({
      is_same_payroll: String(val),
      person_payroll_dept:{
        dept_id : val == true ? this.validateForm.value.person_dept.dept_id : ''
      },
      person_payroll_position:{
        position_id: val == true ? this.validateForm.value.person_position.position_id : ''
      }
    })
  }
}   
