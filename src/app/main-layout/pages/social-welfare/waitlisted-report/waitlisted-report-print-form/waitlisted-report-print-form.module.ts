import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitlistedReportPrintFormRoutingModule } from './waitlisted-report-print-form-routing.module';
import { WaitlistedReportPrintFormComponent } from './waitlisted-report-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WaitlistedReportPrintFormComponent
  ],
  imports: [
    CommonModule,
    WaitlistedReportPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WaitlistedReportPrintFormModule { }
