import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCardListRoutingModule } from './health-card-list-routing.module';
import { HealthCardListComponent } from './health-card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    HealthCardListComponent
  ],
  imports: [
    CommonModule,
    HealthCardListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule,
    PersonFilterModule,
    HeaderPrintModule,
    FooterPrintModule,
    LocaleCurrencyInputModule,
    Ng2SearchPipeModule,

  ]
})
export class HealthCardListModule { }
