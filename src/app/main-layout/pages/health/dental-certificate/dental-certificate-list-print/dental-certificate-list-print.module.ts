import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateListPrintRoutingModule } from './dental-certificate-list-print-routing.module';
import { DentalCertificateListPrintComponent } from './dental-certificate-list-print.component';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DentalCertificateListPrintComponent
  ],
  imports: [
    CommonModule,
    DentalCertificateListPrintRoutingModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class DentalCertificateListPrintModule { }
