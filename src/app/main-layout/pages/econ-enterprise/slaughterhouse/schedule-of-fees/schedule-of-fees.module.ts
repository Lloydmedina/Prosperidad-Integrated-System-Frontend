import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleOfFeesRoutingModule } from './schedule-of-fees-routing.module';
import { ScheduleOfFeesComponent } from './schedule-of-fees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    ScheduleOfFeesComponent
  ],
  imports: [
    CommonModule,
    ScheduleOfFeesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class ScheduleOfFeesModule { }
