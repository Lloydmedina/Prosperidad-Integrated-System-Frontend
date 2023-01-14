import { Component, OnInit } from '@angular/core';
import { BillingStatementService } from 'src/core/services/billing-statement/billing-statement.service';

@Component({
  selector: 'app-billing-statement',
  templateUrl: './billing-statement.component.html',
  styleUrls: ['./billing-statement.component.scss']
})
export class BillingStatementComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/billing-statement"
  addURL = "/main/economic-enterprises/slaughterhouse/billing-statement/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/billing-statement/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/billing-statement/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private bsService: BillingStatementService) { }

  ngOnInit() {
    this.bsService.getBillingStatement(0).subscribe(data => {
      this.formSettings = false
      this.isLoaded = true
    })
  }

}
