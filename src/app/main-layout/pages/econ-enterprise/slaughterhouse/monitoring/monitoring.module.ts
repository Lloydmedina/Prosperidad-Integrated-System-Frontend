import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringComponent } from './monitoring.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    MonitoringComponent
  ],
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class MonitoringModule { }
