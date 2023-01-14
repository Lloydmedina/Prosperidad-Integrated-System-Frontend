import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateFormRoutingModule } from './dental-certificate-form-routing.module';
import { DentalCertificateFormComponent } from './dental-certificate-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    DentalCertificateFormComponent
  ],
  imports: [
    CommonModule,
    DentalCertificateFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class DentalCertificateFormModule { }
