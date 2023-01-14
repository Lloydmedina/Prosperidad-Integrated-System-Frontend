import { Component, OnInit } from '@angular/core';
import { BillingService } from 'src/core/services/billing/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/billing"
  addURL = "/main/economic-enterprises/slaughterhouse/billing/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/billing/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/billing/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private billingService: BillingService) { }

  ngOnInit() {
    this.billingService.getBilling(0).subscribe(data => {
      console.log("BUSHET", data[1])
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
