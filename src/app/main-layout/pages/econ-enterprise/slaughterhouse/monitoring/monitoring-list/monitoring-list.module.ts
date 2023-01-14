import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringListRoutingModule } from './monitoring-list-routing.module';
import { MonitoringListComponent } from './monitoring-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    MonitoringListComponent
  ],
  imports: [
    CommonModule,
    MonitoringListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class MonitoringListModule { }
