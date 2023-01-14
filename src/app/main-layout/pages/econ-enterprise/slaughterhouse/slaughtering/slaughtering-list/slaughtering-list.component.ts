import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { SlaughteringService } from 'src/core/services/slaughtering/slaughtering.service';

@Component({
  selector: 'app-slaughtering-list',
  templateUrl: './slaughtering-list.component.html',
  styleUrls: ['./slaughtering-list.component.scss']
})
export class SlaughteringListComponent implements OnInit {
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
  path: any = ""
listOfData: any = [];
  constructor(
    private router: Router,
    private modal: NzModalService,
    private recService: SlaughteringService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService
  ) { }
  isLoading = true
formSetting: any = []
  ngOnInit() {
    
    this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/property-setup")
    this.path = this.pathService.getPath();
    this.recService.getList().subscribe(data => {
      console.log(data)
      this.listOfData = data[0]
      this.formSetting = data[1]
      this.isLoading = false
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/slaughtering/edit-form/", data.slaughtering_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/slaughtering/print/", data.slaughtering_id])
  }

  
  remarks: any = ""
  deleteModal = false
  deleteData: any = {}
  delete(data:any){
    this.deleteData = data
    this.deleteModal = true;
  }

  handleCancel(){
    this.remarks = ""
    this.deleteModal = false
  }


}
