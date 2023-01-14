import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingPrintFormRoutingModule } from './billing-print-form-routing.module';
import { BillingPrintFormComponent } from './billing-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    BillingPrintFormComponent
  ],
  imports: [
    CommonModule,
    BillingPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class BillingPrintFormModule { }
