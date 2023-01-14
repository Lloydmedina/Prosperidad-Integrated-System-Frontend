import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCtFormPrintRoutingModule } from './wcc-ct-form-print-routing.module';
import { WccCtFormPrintComponent } from './wcc-ct-form-print.component';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [WccCtFormPrintComponent],
  imports: [
    CommonModule,
    WccCtFormPrintRoutingModule,
    NgZorroModule,
    ReactiveFormsModule,
    FormsModule,
    LocaleCurrencyInputModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule

  ]
})
export class WccCtFormPrintModule { }
