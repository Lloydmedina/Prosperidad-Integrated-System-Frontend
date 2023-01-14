import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCertificateFormNewRoutingModule } from './medical-certificate-form-new-routing.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { MedicalCertificateFormNewComponent } from './medical-certificate-form-new.component';


@NgModule({
  declarations: [
    MedicalCertificateFormNewComponent
  ],
  imports: [
    CommonModule,
    MedicalCertificateFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule

  ]
})
export class MedicalCertificateFormNewModule { }
