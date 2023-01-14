import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/core/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/payment"
  addURL = "/main/economic-enterprises/slaughterhouse/payment/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/payment/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/payment/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPayment(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
