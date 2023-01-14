import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcciuListPrintRoutingModule } from './wcciu-list-print-routing.module';
import { WcciuListPrintComponent } from './wcciu-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WcciuListPrintComponent
  ],
  imports: [
    CommonModule,
    WcciuListPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule

  ]
})
export class WcciuListPrintModule { }
