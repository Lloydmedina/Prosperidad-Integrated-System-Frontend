import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportAddFormRoutingModule } from './wcc-incident-report-add-form-routing.module';
import { WccIncidentReportAddFormComponent } from './wcc-incident-report-add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    WccIncidentReportAddFormComponent
  ],
  imports: [
    CommonModule,
    WccIncidentReportAddFormRoutingModule,
    ReactiveFormsModule,
    NgZorroModule,
    FormsModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class WccIncidentReportAddFormModule { }
