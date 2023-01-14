import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BarangayOfficialService } from 'src/core/services/barangay-official-service/barangay-official.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
@Component({
  selector: 'app-barangay-official-list',
  templateUrl: './barangay-official-list.component.html',
  styleUrls: ['./barangay-official-list.component.css']
})
export class BarangayOfficialListComponent implements OnInit {

  @Input() mode: any = "";
  listOfData: any[] = [];

  control = {
    edit: false,
    delete: false
  }
isLoading = true
  constructor(
    private router: Router,
    private modal: NzModalService,
    private brgyService: BarangayOfficialService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }


  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/barangay-official")
    
    this.brgyService.getList().subscribe((value:any) => {
      console.log(value)
      this.listOfData = value[0]
      this.isLoading = false
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/admin-console/barangay-official/edit-form/"+ data.brgy_official_id + "/" + data.brgy_name + "/" + data.official_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.brgyService.delete(data.dept_id).subscribe(async (x:any) => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Barangay Officials Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Barangay Officials has not been deleted.'
          );
        })
      }
    });
  }
}
