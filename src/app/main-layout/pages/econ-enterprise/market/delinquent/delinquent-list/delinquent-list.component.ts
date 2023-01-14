import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { DelinquentService } from 'src/core/services/delinquent/delinquent.service';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';

@Component({
  selector: 'app-delinquent-list',
  templateUrl: './delinquent-list.component.html',
  styleUrls: ['./delinquent-list.component.css']
})
export class DelinquentListComponent implements OnInit {
  listOfData: any = [];

  constructor(
    private router: Router,
    private modal: NzModalService,
    private billingService: MarketBillingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private delService: DelinquentService,
    public datepipe: DatePipe
  ) { }
  isLoading = true
 
  ngOnInit() {
    this.delService.getList().subscribe(data => {
      console.log(data)
      this.listOfData = data
      this.isLoading = false
    })
  
  }
  view(data: any){
    this.router.navigate(["/main/economic-enterprises/market/delinquent/view/", data.delinquent_list_id])
  }
}
