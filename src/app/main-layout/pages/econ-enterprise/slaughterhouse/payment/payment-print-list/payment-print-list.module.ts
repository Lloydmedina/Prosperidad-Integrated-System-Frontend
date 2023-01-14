import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPrintListRoutingModule } from './payment-print-list-routing.module';
import { PaymentPrintListComponent } from './payment-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PaymentPrintListComponent
  ],
  imports: [
    CommonModule,
    PaymentPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PaymentPrintListModule { }
