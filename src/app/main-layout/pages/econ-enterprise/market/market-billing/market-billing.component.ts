import { Component, OnInit } from '@angular/core';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';

@Component({
  selector: 'app-market-billing',
  templateUrl: './market-billing.component.html',
  styleUrls: ['./market-billing.component.scss']
})
export class MarketBillingComponent implements OnInit {

  listURL = "/main/economic-enterprises/market/market-billing"
  addURL = "/main/economic-enterprises/market/market-billing/add-form"
  editURL = "/main/economic-enterprises/market/market-billing/edit-form"
  printListURL = "/main/economic-enterprises/market/market-billing/print"
  formSettings: any = []
  isLoaded = false
  constructor(
    private service: MarketBillingService) { 
 
    }

  ngOnInit() {    
    this.service.getList('', '').subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
  })
  }
}
