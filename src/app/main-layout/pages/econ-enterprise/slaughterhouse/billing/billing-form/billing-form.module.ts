import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingFormRoutingModule } from './billing-form-routing.module';
import { BillingFormComponent } from './billing-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    BillingFormComponent
  ],
  imports: [
    CommonModule,
    BillingFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class BillingFormModule { }
