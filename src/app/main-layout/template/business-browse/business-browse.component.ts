import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BusinessService } from 'src/core/services/business/business.service';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';

@Component({
  selector: 'app-business-browse',
  templateUrl: './business-browse.component.html',
  styleUrls: ['./business-browse.component.css']
})
export class BusinessBrowseComponent implements OnInit {

 
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
    private bizService: BusinessService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private drawerRef: NzDrawerRef<string>
  ) { }
status_id = 0;
reg_status = 0;

regSwitch = false;
statusSwitch = false;


  ngOnInit() {
    localStorage.removeItem("biz_status")
    localStorage.removeItem("reg_status")
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/business")
    
    this.bizService.getList(0,0).subscribe((value:any) => {
      this.listOfData = value[0]
      this.businessList = this.listOfData
      this.suggestions = value[2]
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/business/edit-form/", data.business_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.bizService.delete(data.business_id).subscribe(async (x:any) => {
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

searchModel: string = "";

beginSearch(value:any){
  this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
triggerSearch(value:any){
  
  if(value.tag == 'bn'){
    this.listOfData = this.businessList.filter((obj:any) => obj.business_name.toLowerCase() == value.val.toLowerCase());
  }
  else if(value.tag =='tn'){
    this.listOfData = this.businessList.filter((obj:any) => obj.trade_name.toLowerCase() == value.val.toLowerCase());
  }else{
    localStorage.removeItem("biz_brgy")
    this.listOfData = this.businessList.filter((obj:any) => obj.brgy.toLowerCase() == value.val.toLowerCase());
    localStorage.setItem("biz_brgy", value.val)
  }


  if(this.listOfData.length == 0){
    this.notification.create(
      "error",
      'No Record Found!',
      ''
    )
  }
}
clearSearch(){
  this.searchModel = ""
  this.bizService.getList(this.status_id,this.reg_status).subscribe((value:any) => {
    this.listOfData = value[0]
    this.businessList = this.listOfData
    this.suggestions = value[2]
  })
}
  regFilter(){
    localStorage.removeItem("reg_status")
    if(this.regSwitch){
      this.reg_status = 1
    }else{
      this.reg_status = 0
    }
    localStorage.setItem("reg_status", this.reg_status.toString())
    this.applyFilter();
  }

  statusFilter(){
    localStorage.removeItem("biz_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("biz_status", this.status_id.toString());
    this.applyFilter();
  }

  applyFilter(){
    this.bizService.getList(this.status_id, this.reg_status).subscribe(data => {
      this.listOfData = data[0]
      this.businessList = this.listOfData
    })
  }

  selectBiz(data:any){
    this.drawerRef.close(data);
  }
}
