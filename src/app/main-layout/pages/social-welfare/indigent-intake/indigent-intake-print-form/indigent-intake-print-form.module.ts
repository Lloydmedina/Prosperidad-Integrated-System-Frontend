import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentIntakePrintFormRoutingModule } from './indigent-intake-print-form-routing.module';
import { IndigentIntakePrintFormComponent } from './indigent-intake-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    IndigentIntakePrintFormComponent
  ],
  imports: [
    CommonModule,
    IndigentIntakePrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule
  ]
})
export class IndigentIntakePrintFormModule { }
