import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhumationPermitListRoutingModule } from './exhumation-permit-list-routing.module';
import { ExhumationPermitListComponent } from './exhumation-permit-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    ExhumationPermitListComponent
  ],
  imports: [
    CommonModule,
    ExhumationPermitListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule,
    LocaleCurrencyInputModule
  ]
})
export class ExhumationPermitListModule { }
