import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitlistedReportListRoutingModule } from './waitlisted-report-list-routing.module';
import { WaitlistedReportListComponent } from './waitlisted-report-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WaitlistedReportListComponent
  ],
  imports: [
    CommonModule,
    WaitlistedReportListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WaitlistedReportListModule { }
