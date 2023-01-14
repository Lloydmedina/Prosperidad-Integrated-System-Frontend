import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentPrintFormRoutingModule } from './payment-print-form-routing.module';
import { PaymentPrintFormComponent } from './payment-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PaymentPrintFormComponent
  ],
  imports: [
    CommonModule,
    PaymentPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PaymentPrintFormModule { }
