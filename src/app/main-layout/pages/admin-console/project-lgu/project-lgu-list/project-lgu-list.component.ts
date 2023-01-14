import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { DomainService } from 'src/core/services/domain/domain.service';
import { ProjectLguService } from 'src/core/services/project-lgu/project-lgu.service';

@Component({
  selector: 'app-project-lgu-list',
  templateUrl: './project-lgu-list.component.html',
  styleUrls: ['./project-lgu-list.component.css']
})
export class ProjectLguListComponent implements OnInit {
  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }
  isLoading= true

  constructor(
    private router: Router,
    private modal: NzModalService,
    private projectService: ProjectLguService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }


  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/project-lgu")
    
    this.projectService.getList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/project-lgu/edit-form/", data.project_title_guid])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.projectService.delete(data.project_title_guid).subscribe(async x => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'LGU Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'LGU Record has not been deleted.'
          );
        })
      }
    });
  }

}
