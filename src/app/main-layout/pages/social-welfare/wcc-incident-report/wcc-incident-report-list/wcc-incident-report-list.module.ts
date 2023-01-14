import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportListRoutingModule } from './wcc-incident-report-list-routing.module';
import { WccIncidentReportListComponent } from './wcc-incident-report-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccIncidentReportListComponent
  ],
  imports: [
    CommonModule,
    WccIncidentReportListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    DateFilterModule
  ]
})
export class WccIncidentReportListModule { }
