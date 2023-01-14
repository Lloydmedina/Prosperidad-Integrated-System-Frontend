import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceFormPrintRoutingModule } from './wcc-case-conference-form-print-routing.module';
import { WccCaseConferenceFormPrintComponent } from './wcc-case-conference-form-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WccCaseConferenceFormPrintComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceFormPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule

  ]
})
export class WccCaseConferenceFormPrintModule { }
