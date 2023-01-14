import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCertificateListPrintRoutingModule } from './medical-certificate-list-print-routing.module';
import { MedicalCertificateListPrintComponent } from './medical-certificate-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';

import { NgxPrintModule } from 'ngx-print';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    MedicalCertificateListPrintComponent
  ],
  imports: [
    CommonModule,
    MedicalCertificateListPrintRoutingModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class MedicalCertificateListPrintModule { }
