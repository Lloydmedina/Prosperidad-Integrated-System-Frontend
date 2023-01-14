import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringPrintListRoutingModule } from './monitoring-print-list-routing.module';
import { MonitoringPrintListComponent } from './monitoring-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    MonitoringPrintListComponent
  ],
  imports: [
    CommonModule,
    MonitoringPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class MonitoringPrintListModule { }
