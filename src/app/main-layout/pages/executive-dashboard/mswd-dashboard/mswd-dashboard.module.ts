import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MswdDashboardRoutingModule } from './mswd-dashboard-routing.module';
import { MswdDashboardComponent } from './mswd-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    MswdDashboardComponent
  ],
  imports: [
    CommonModule,
    MswdDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
  ]
})
export class MswdDashboardModule { }
