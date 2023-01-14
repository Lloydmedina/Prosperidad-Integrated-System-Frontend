import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AccountTitleService } from 'src/core/services/account-title/account-title.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';

@Component({
  selector: 'app-account-title-list',
  templateUrl: './account-title-list.component.html',
  styleUrls: ['./account-title-list.component.scss']
})
export class AccountTitleListComponent implements OnInit {

  listOfData: any[] = [];
  businessList:any =[];
  suggestions:any = [];
  filteredOptions:any = [];
  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private accService: AccountTitleService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }
status_id = 0;
reg_status = 0;

regSwitch = false;
statusSwitch = false;
isLoading = true

  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/accounting/account-title")
    
    this.accService.getList().subscribe((value:any) => {
      this.listOfData = value[0]
      this.businessList = this.listOfData
      this.isLoading = false
    })
  }

  edit(data:any){
    this.router.navigate(["/main/accounting/account-title/edit-form/", data.account_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.accService.delete(data.business_id).subscribe(async (x:any) => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Account Title Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Account Title has not been deleted.'
          );
        })
      }
    });
  }

}
