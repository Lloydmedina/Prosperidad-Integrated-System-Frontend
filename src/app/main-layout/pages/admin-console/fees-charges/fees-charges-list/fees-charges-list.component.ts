import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { FeesChargesService } from 'src/core/services/fees-charges/fees-charges.service';

@Component({
  selector: 'app-fees-charges-list',
  templateUrl: './fees-charges-list.component.html',
  styleUrls: ['./fees-charges-list.component.css']
})
export class FeesChargesListComponent implements OnInit {

  listOfData: any[] = [];
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
isLoading = true
  constructor(
    private router: Router,
    private modal: NzModalService,
    private feesService: FeesChargesService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }


  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/admin-console/fees-charges")
    
    console.log(this.control)
    this.feesService.getList(0).subscribe(value => {
      this.listOfData = value[0]

      this.fcList = this.listOfData
      this.suggestions = this.listOfData.map((x:any) => x.fees_name)
      this.isLoading = false
    })
  }

  edit(data:any){
    this.router.navigate(["/main/admin-console/fees-charges/edit-form/", data.fees_pk_id])
  }
  print(data:any){
    this.router.navigate(["/main/admin-console/fees-charges/print/", data.fees_pk_id])
  }

  delete(data:any){
     this.modal.confirm({
      nzTitle: 'Do you want to delete this record?',
      nzOnOk: () => 
      {
        this.feesService.delete(data.fees_pk_id).subscribe(async x => {
          this.ngOnInit()
          await this.notification.create(
            "success",
            'Successfully Deleted',
            'Fees Charges Record has successfully deleted.'
          );
        },
        async error => {
         await this.notification.create(
            "error",
            'Unsuccessfully Saved',
            'Fees Charges Officials has not been deleted.'
          );
        })
      }
    });
  }

  statusSwitch = false;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("fc_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("fc_status", this.status_id.toString());
    this.applyFilter();
  }

  applyFilter(){
    this.feesService.getList(this.status_id).subscribe(data => {
      this.listOfData = data[0]
      this.fcList = this.listOfData
    })
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
  this.searchModel = ""
  this.feesService.getList(this.status_id).subscribe((value:any) => {
    this.listOfData = value[0]
    this.fcList = this.listOfData
    this.suggestions = this.listOfData.map((x:any) => x.fees_name)
  })
}

}
