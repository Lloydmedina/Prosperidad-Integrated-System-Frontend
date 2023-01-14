import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceListPrintRoutingModule } from './wcc-case-conference-list-print-routing.module';
import { WccCaseConferenceListPrintComponent } from './wcc-case-conference-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WccCaseConferenceListPrintComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceListPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WccCaseConferenceListPrintModule { }
