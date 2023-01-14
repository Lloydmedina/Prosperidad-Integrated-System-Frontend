import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccIncidentReportRoutingModule } from './wcc-incident-report-routing.module';
import { WccIncidentReportComponent } from './wcc-incident-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [WccIncidentReportComponent],
  imports: [
    CommonModule,
    WccIncidentReportRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccIncidentReportModule { }
