import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalCertificateFormRoutingModule } from './medical-certificate-form-routing.module';
import { MedicalCertificateFormComponent } from './medical-certificate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    MedicalCertificateFormComponent
  ],
  imports: [
    CommonModule,
    MedicalCertificateFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class MedicalCertificateFormModule { }
