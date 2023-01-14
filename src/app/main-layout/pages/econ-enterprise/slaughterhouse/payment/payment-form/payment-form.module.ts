import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentFormRoutingModule } from './payment-form-routing.module';
import { PaymentFormComponent } from './payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    PaymentFormComponent
  ],
  imports: [
    CommonModule,
    PaymentFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class PaymentFormModule { }
