import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcardBusinessListPrintRoutingModule } from './healthcard-business-list-print-routing.module';
import { HealthcardBusinessListPrintComponent } from './healthcard-business-list-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    HealthcardBusinessListPrintComponent
  ],
  imports: [
    CommonModule,
    HealthcardBusinessListPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class HealthcardBusinessListPrintModule { }
