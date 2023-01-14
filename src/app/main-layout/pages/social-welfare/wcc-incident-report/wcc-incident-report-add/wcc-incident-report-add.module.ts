import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportAddRoutingModule } from './wcc-incident-report-add-routing.module';
import { WccIncidentReportAddComponent } from './wcc-incident-report-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccIncidentReportAddComponent
  ],
  imports: [
    CommonModule,
    WccIncidentReportAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    DateFilterModule
  ]
})
export class WccIncidentReportAddModule { }
