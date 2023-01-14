import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccSummaryIntakeRoutingModule } from './wcc-summary-intake-routing.module';
import { WccSummaryIntakeComponent } from './wcc-summary-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccSummaryIntakeComponent
  ],
  imports: [
    CommonModule,
    WccSummaryIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccSummaryIntakeModule { }
