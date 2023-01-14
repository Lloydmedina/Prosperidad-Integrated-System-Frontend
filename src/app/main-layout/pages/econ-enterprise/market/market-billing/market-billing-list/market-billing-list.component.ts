import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { FormConfigService } from 'src/core/services/form-config/form-config.service';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';

@Component({
  selector: 'app-market-billing-list',
  templateUrl: './market-billing-list.component.html',
  styleUrls: ['./market-billing-list.component.scss']
})
export class MarketBillingListComponent implements OnInit {
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
listOfData: any = [];
dateNow: any =  new Date()
  constructor(
    private router: Router,
    private modal: NzModalService,
    private billingService: MarketBillingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private formConfig: FormConfigService,
    public datepipe: DatePipe
  ) { }
  isLoading = true
 
  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/market-billing")
    this.formConfig.itemValue.subscribe(dt => {
      console.log('filter', dt)
      this.dateNow = this.datepipe.transform(this.dateNow, 'MM/dd/yyyy')
      this.billingService.getList(dt[0],dt[1]).subscribe(value => {
        this.listOfData = value[0]
        console.log(this.listOfData)
        this.isLoading = false
        console.log(this.dateNow)
        // this.fcList = this.listOfData
        // this.suggestions = this.listOfData.map((x:any) => x.fees_name)
      })
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/market/market-billing/edit-form/", data.billing_id])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/market-billing/print/", data.billing_id])
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
    this.billingService.delete(this.deleteData.dtl_id, this.remarks).subscribe(async x => {
      this.deleteModal = false
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

  statusSwitch = false;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("property_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("property_status", this.status_id.toString());
    // this.applyFilter();
  }


  comp(due:Date, curr:Date){
    
    let dDate:any = this.datepipe.transform(due, 'MM/dd/yyyy')

    if(dDate < curr){

      return true
    }
    

    return false
  }

//   applyFilter(){
//     this.billingService.getList().subscribe(data => {
//       this.listOfData = data[0]
//       this.fcList = this.listOfData
//     })
//   }

  
// beginSearch(value:any){
//   this.filteredOptions = this.suggestions.filter((option:any) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
// }
// triggerSearch(value:any){
//   console.log(value)
//   this.listOfData = this.fcList.filter((obj:any) => obj.fees_name.toLowerCase() == value.toLowerCase());


//   if(this.listOfData.length == 0){
//     this.notification.create(
//       "error",
//       'No Record Found!',
//       ''
//     )
//   }
// }
// searchModel: any = ""
// clearSearch(){
//   this.searchModel = ""
//   this.billingService.getList().subscribe((value:any) => {
//     this.listOfData = value[0]
//     this.fcList = this.listOfData
//     this.suggestions = this.listOfData.map((x:any) => x.fees_name)
//   })
// }
}
