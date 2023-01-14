import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';

@Component({
  selector: 'app-tenant-profiling-list',
  templateUrl: './tenant-profiling-list.component.html',
  styleUrls: ['./tenant-profiling-list.component.css']
})
export class TenantProfilingListComponent implements OnInit {

  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
listOfData: any = [];
  constructor(
    private router: Router,
    private modal: NzModalService,
    private tenantService: TenantProfilingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }
  isLoading = true
  formSetting: any = []
  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/tenant-profiling")
    
    this.tenantService.getList(0).subscribe(value => {
      this.listOfData = value[0]

      this.fcList = this.listOfData
      this.formSetting = value[1]
      this.suggestions = value[2]
      this.isLoading = false
      console.log("asd", this.suggestions)
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/market/tenant-profiling/edit-form/", data.tenant_profile_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/tenant-profiling/print/", data.tenant_profile_id])
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
    this.tenantService.delete(this.deleteData.dtl_id, this.remarks).subscribe(async x => {
      this.deleteModal = false
      this.ngOnInit()
      await this.notification.create(
        "success",
        'Successfully Deleted',
        'Tenant Profiling Record has successfully deleted.'
      );
    },
    async error => {
     await this.notification.create(
        "error",
        'Unsuccessfully Saved',
        'Tenant Profiling Record has not been deleted.'
      );
    })
  }

  statusSwitch = false;
  status_id: any = 1;

  statusFilter(){
    localStorage.removeItem("tenant_profiling_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("tenant_profiling_status", this.status_id.toString());
    this.applyFilter();
  }

  applyFilter(){
    this.isLoading = true
    this.tenantService.getList(this.status_id).subscribe(data => {
      this.isLoading = false
      this.listOfData = data[0]
      this.fcList = this.listOfData
    })
  }

  
beginSearch(value:any){
  this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
triggerSearch(value:any){
  console.log(value)

  if(value.tag == 'pn'){
    this.listOfData = this.fcList.filter((obj:any) => obj.property_name.toLowerCase() == value.val.toLowerCase());
  } else if (value.tag == 'tn') {
    this.listOfData = this.fcList.filter((obj:any) => obj.tenant.toLowerCase() == value.val.toLowerCase());
  }

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
  this.searchModel = ""
  this.isLoading = true
  this.tenantService.getList(this.status_id).subscribe((value:any) => {
    this.isLoading = false
    this.listOfData = value[0]
    this.fcList = this.listOfData
    this.suggestions = value[2]
  })
}

}
