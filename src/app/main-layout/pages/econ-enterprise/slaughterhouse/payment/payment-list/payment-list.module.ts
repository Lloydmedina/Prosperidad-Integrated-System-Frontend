import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentListRoutingModule } from './payment-list-routing.module';
import { PaymentListComponent } from './payment-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    PaymentListComponent
  ],
  imports: [
    CommonModule,
    PaymentListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class PaymentListModule { }
