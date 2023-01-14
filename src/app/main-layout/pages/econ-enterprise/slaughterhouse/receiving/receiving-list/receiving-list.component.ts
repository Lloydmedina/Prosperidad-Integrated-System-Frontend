import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { ReceivingService } from 'src/core/services/receiving/receiving.service';

@Component({
  selector: 'app-receiving-list',
  templateUrl: './receiving-list.component.html',
  styleUrls: ['./receiving-list.component.scss']
})
export class ReceivingListComponent implements OnInit {

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
    private recService: ReceivingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService
  ) { }
  isLoading = true
formSetting: any = []
  ngOnInit() {
    this.path = this.pathService.getPath();
    this.recService.getList(0).subscribe(data => {
      this.listOfData = data[0]
      this.formSetting = data[1]
      console.log(this.formSetting)
      this.isLoading = false
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/receiving/edit-form/", data.main_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/receiving/print/", data.main_id])
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

  handleOk(){
    // this.rentAppService.delete(this.deleteData.rental_application_id, this.remarks).subscribe(async x => {
    //   this.deleteModal = false
    //   this.ngOnInit()
    //   await this.notification.create(
    //     "success",
    //     'Successfully Deleted',
    //     'Fees Charges Record has successfully deleted.'
    //   );
    // },
    // async error => {
    //  await this.notification.create(
    //     "error",
    //     'Unsuccessfully Saved',
    //     'Fees Charges Officials has not been deleted.'
    //   );
    // })
  }

  statusSwitch = false;
  status_id: any;

  statusFilter(){
    // localStorage.removeItem("property_status")
    // if(this.statusSwitch){
    //   this.status_id = 1
    // }else{
    //   this.status_id = 0
    // }
    // localStorage.setItem("property_status", this.status_id.toString());
    // this.applyFilter();
  }

  applyFilter(){
    // this.tenantService.getList().subscribe(data => {
    //   this.listOfData = data[0]
    //   this.fcList = this.listOfData
    // })
  }

  
beginSearch(value:any){
  this.filteredOptions = this.suggestions.filter((option:any) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
triggerSearch(value:any){
  console.log(value)
  this.listOfData = this.fcList.filter((obj:any) => obj.fees_name.toLowerCase() == value.toLowerCase());


  if(this.listOfData.length == 0){
    this.notification.create(
      "error",
      'No Record Found!',
      ''
    )
  }
}
searchModel: any = ""
clearSearch(){
  // this.searchModel = ""
  // this.tenantService.getList(this.status_id).subscribe((value:any) => {
  //   this.listOfData = value[0]
  //   this.fcList = this.listOfData
  //   this.suggestions = this.listOfData.map((x:any) => x.fees_name)
  // })
}
}
