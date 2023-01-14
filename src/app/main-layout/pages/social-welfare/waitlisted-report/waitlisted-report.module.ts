import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitlistedReportRoutingModule } from './waitlisted-report-routing.module';
import { WaitlistedReportComponent } from './waitlisted-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    WaitlistedReportComponent
  ],
  imports: [
    CommonModule,
    WaitlistedReportRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class WaitlistedReportModule { }
