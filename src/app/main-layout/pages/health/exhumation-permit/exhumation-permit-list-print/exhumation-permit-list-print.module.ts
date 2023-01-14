import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhumationPermitListPrintRoutingModule } from './exhumation-permit-list-print-routing.module';
import { ExhumationPermitListPrintComponent } from './exhumation-permit-list-print.component';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

import { DateFilterComponent } from 'src/app/main-layout/template/date-filter/date-filter.component';
import { NgxPrintModule } from 'ngx-print';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';


@NgModule({
  declarations: [
    ExhumationPermitListPrintComponent
  ],
  imports: [
    CommonModule,
    ExhumationPermitListPrintRoutingModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class ExhumationPermitListPrintModule { }
