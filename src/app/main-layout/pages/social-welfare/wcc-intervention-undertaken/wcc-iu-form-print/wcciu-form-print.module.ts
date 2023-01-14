import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcciuFormPrintRoutingModule } from './wcciu-form-print-routing.module';
import { WcciuFormPrintComponent } from './wcciu-form-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WcciuFormPrintComponent
  ],
  imports: [
    CommonModule,
    WcciuFormPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WcciuFormPrintModule { }
