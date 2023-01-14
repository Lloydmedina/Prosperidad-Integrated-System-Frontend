import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateListRoutingModule } from './dental-certificate-list-routing.module';
import { DentalCertificateListComponent } from './dental-certificate-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    DentalCertificateListComponent
  ],
  imports: [
    CommonModule,
    DentalCertificateListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule,
    LocaleCurrencyInputModule
  ]
})
export class DentalCertificateListModule { }
