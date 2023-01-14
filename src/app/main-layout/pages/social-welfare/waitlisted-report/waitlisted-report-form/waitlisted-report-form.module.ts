import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitlistedReportFormRoutingModule } from './waitlisted-report-form-routing.module';
import { WaitlistedReportFormComponent } from './waitlisted-report-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WaitlistedReportFormComponent
  ],
  imports: [
    CommonModule,
    WaitlistedReportFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WaitlistedReportFormModule { }
