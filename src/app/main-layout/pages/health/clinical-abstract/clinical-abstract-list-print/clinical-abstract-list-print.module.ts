import { NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractListPrintRoutingModule } from './clinical-abstract-list-print-routing.module';

import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';
import { ClinicalAbstractListPrintComponent } from './clinical-abstract-list-print.component';


@NgModule({
  declarations: [
    ClinicalAbstractListPrintComponent
  ],
  imports: [
    CommonModule,
    ClinicalAbstractListPrintRoutingModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class ClinicalAbstractListPrintModule { }
