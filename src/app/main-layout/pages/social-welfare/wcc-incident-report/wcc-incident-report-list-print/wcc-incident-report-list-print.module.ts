import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportListPrintRoutingModule } from './wcc-incident-report-list-print-routing.module';
import { WccIncidentReportListPrintComponent } from './wcc-incident-report-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WccIncidentReportListPrintComponent
  ],
  imports: [
    CommonModule,
    WccIncidentReportListPrintRoutingModule,
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
export class WccIncidentReportListPrintModule { }
