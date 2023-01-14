import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalAbstractListRoutingModule } from './clinical-abstract-list-routing.module';
import { ClinicalAbstractListComponent } from './clinical-abstract-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    ClinicalAbstractListComponent
  ],
  imports: [
    CommonModule,
    ClinicalAbstractListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule,
    LocaleCurrencyInputModule
  ]
})
export class ClinicalAbstractListModule { }
