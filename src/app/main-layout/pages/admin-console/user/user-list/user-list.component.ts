import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { UserService } from 'src/core/services/user/user.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  listOfData: any = [];

  constructor(
    private router: Router,
    private modal: NzModalService,
    private userService: UserService,
    private checkPriv: CheckPrivilegeService,
    private notification: NzNotificationService
  ) { 
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/user")}
    isLoading = true  
  control: any = {}

  ngOnInit() {
    
    this.userService.getList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
      // console.log("Val", value)
    })
  }

  edit(data: any) {
    this.router.navigate(["/main/admin-console/user/edit-form/", data.user_guid])
  }

  delete(data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzOnOk: () => 
      {
        this.userService.delete(data.user_guid).subscribe(async x => {
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
