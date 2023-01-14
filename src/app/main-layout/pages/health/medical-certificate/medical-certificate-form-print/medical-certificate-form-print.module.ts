import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCertificateFormPrintRoutingModule } from './medical-certificate-form-print-routing.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';
import { MedicalCertificateFormPrintComponent } from './medical-certificate-form-print.component';


@NgModule({
  declarations: [
    MedicalCertificateFormPrintComponent
  ],
  imports: [
    CommonModule,
    MedicalCertificateFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule,

  ]
})
export class MedicalCertificateFormPrintModule { }
