import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsVoucherListRoutingModule } from './aics-voucher-list-routing.module';
import { AicsVoucherListComponent } from './aics-voucher-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    AicsVoucherListComponent
  ],
  imports: [
    CommonModule,
    AicsVoucherListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class AicsVoucherListModule { }
