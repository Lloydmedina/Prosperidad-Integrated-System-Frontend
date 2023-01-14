import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateFormPrintRoutingModule } from './dental-certificate-form-print-routing.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';
import { DentalCertificateFormPrintComponent } from './dental-certificate-form-print.component';

@NgModule({
  declarations: [
    DentalCertificateFormPrintComponent
  ],
  imports: [
    CommonModule,
    DentalCertificateFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule

  ]
})
export class DentalCertificateFormPrintModule { }
