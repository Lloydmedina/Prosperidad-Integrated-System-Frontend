import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringPrintFormRoutingModule } from './monitoring-print-form-routing.module';
import { MonitoringPrintFormComponent } from './monitoring-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    MonitoringPrintFormComponent
  ],
  imports: [
    CommonModule,
    MonitoringPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class MonitoringPrintFormModule { }
