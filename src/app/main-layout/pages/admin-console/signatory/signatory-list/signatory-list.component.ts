import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { SignatoryService } from 'src/core/services/signatory/signatory.service';

@Component({
  selector: 'app-signatory-list',
  templateUrl: './signatory-list.component.html',
  styleUrls: ['./signatory-list.component.css']
})
export class SignatoryListComponent implements OnInit {
  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private signatoryService: SignatoryService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }

  isLoading = true
  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/signatory")
    
    this.signatoryService.getList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/signatory/edit-form/", data.signatory_main_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.signatoryService.delete(data.signatory_main_id).subscribe(async x => {
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
