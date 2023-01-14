import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportFormPrintRoutingModule } from './wcc-incident-report-form-print-routing.module';
import { WccIncidentReportFormPrintComponent } from './wcc-incident-report-form-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WccIncidentReportFormPrintComponent
  ],
  imports: [
    CommonModule,
    WccIncidentReportFormPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WccIncidentReportFormPrintModule { }
