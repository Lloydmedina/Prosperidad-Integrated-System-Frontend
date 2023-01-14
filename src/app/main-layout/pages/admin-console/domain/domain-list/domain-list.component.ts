import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { DomainService } from 'src/core/services/domain/domain.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-domain-list',
  templateUrl: './domain-list.component.html',
  styleUrls: ['./domain-list.component.scss']
})
export class DomainListComponent implements OnInit {

  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }
  isLoading = true

  constructor(
    private router: Router,
    private modal: NzModalService,
    private domainService: DomainService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  ngOnInit() {
    
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/domain")
    
    this.domainService.getDomainList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
    })
  }

  edit(data: any) {
    this.router.navigate(["/main/admin-console/domain/edit-form/", data.domain_guid])
  }

  delete(data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzOnOk: () => 
      {
        this.domainService.delete(data.domain_guid).subscribe(async x => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Domain Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Domain Record has not been deleted.'
          );
        })
      }
    });
  }

}
