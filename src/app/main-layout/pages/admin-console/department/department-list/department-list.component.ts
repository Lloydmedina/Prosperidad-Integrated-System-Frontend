import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { DepartmentService } from 'src/core/services/department-service/department.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {


  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private deptService: DepartmentService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }
  isLoading = true

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/department")
    
    this.deptService.getList().subscribe((value:any) => {
      this.listOfData = value[0]
      this.checkPriv.printOption(value[1].allow_print)
      this.isLoading = false
      // console.log(this.listOfData)
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/department/edit-form/", data.dept_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.deptService.delete(data.dept_id).subscribe(async (x:any) => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Elected Officials Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Elected Officials has not been deleted.'
          );
        })
      }
    });
  }
}
