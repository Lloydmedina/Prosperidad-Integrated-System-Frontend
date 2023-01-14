import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsVoucherPrintListRoutingModule } from './aics-voucher-print-list-routing.module';
import { AicsVoucherPrintListComponent } from './aics-voucher-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AicsVoucherPrintListComponent
  ],
  imports: [
    CommonModule,
    AicsVoucherPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AicsVoucherPrintListModule { }
