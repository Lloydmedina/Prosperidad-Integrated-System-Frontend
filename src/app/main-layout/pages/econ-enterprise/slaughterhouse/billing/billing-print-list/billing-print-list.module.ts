import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingPrintListRoutingModule } from './billing-print-list-routing.module';
import { BillingPrintListComponent } from './billing-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    BillingPrintListComponent
  ],
  imports: [
    CommonModule,
    BillingPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class BillingPrintListModule { }
