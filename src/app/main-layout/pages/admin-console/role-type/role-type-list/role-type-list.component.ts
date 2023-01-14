import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { RoleTypeService } from 'src/core/services/role-type/role-type.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-role-type-list',
  templateUrl: './role-type-list.component.html',
  styleUrls: ['./role-type-list.component.scss']
})

export class RoleTypeListComponent implements OnInit {
  isLoading = true
  listOfData: any = []
  constructor(
    private router: Router,
    private modal: NzModalService,
    private roletypeService: RoleTypeService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { this.control = this.checkPriv.checkPrivilege("/main/admin-console/role-type")}

  control: any = {}
  ngOnInit() {
    
    this.roletypeService.getList().subscribe(value => {
      this.listOfData = value
      this.isLoading = false
    })
  }

  edit(id:string) {
    this.router.navigate(["/main/admin-console/role-type/edit-form/" + id])
  }

  delete(id:string) {
    this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => console.log('OK')
    });
  }

}
