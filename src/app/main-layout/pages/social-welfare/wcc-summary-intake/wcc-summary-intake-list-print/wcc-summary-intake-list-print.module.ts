import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccSummaryIntakeListPrintRoutingModule } from './wcc-summary-intake-list-print-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { WccSummaryIntakeListPrintComponent } from './wcc-summary-intake-list-print.component';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WccSummaryIntakeListPrintComponent
  ],
  imports: [
    CommonModule,
    WccSummaryIntakeListPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WccSummaryIntakeListPrintModule { }
