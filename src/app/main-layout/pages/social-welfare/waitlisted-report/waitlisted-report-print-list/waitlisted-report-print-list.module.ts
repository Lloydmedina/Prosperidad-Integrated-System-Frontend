import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitlistedReportPrintListRoutingModule } from './waitlisted-report-print-list-routing.module';
import { WaitlistedReportPrintListComponent } from './waitlisted-report-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    WaitlistedReportPrintListComponent
  ],
  imports: [
    CommonModule,
    WaitlistedReportPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WaitlistedReportPrintListModule { }
