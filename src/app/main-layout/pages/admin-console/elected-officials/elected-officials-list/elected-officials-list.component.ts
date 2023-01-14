import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { ElectedOfficialsService } from 'src/core/services/elected-officials/elected-officials.service';

@Component({
  selector: 'app-elected-officials-list',
  templateUrl: './elected-officials-list.component.html',
  styleUrls: ['./elected-officials-list.component.scss']
})
export class ElectedOfficialsListComponent implements OnInit {

  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private eoService: ElectedOfficialsService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  isLoading = true
  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/elected-officials")
    
    this.eoService.getList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/elected-officials/edit-form/", data.eo_id])
  }
  print(data:any){
    this.router.navigate(["/main/admin-console/elected-officials/print/", data.eo_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.eoService.delete(data.eo_id).subscribe(async x => {
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
