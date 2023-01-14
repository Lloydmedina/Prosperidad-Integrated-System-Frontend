import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutiveDashboardRoutingModule } from './executive-dashboard-routing.module';
import { ExecutiveDashboardComponent } from './executive-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FamilyCompositionComponent } from '../social-welfare/family-composition/family-composition.component';


@NgModule({
  declarations: [
    ExecutiveDashboardComponent
  ],
  imports: [
    CommonModule,
    ExecutiveDashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ExecutiveDashboardModule { }
