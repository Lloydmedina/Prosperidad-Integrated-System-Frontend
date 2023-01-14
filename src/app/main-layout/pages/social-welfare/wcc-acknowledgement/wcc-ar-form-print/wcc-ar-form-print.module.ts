import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccArFormPrintRoutingModule } from './wcc-ar-form-print-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { WccArFormPrintComponent } from './wcc-ar-form-print.component';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [WccArFormPrintComponent],
  imports: [
    CommonModule,
    WccArFormPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WccArFormPrintModule { }
