import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractFormPrintRoutingModule } from './clinical-abstract-form-print-routing.module';
import { ClinicalAbstractFormPrintComponent } from './clinical-abstract-form-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    ClinicalAbstractFormPrintComponent
  ],
  imports: [
    CommonModule,
    ClinicalAbstractFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class ClinicalAbstractFormPrintModule { }
