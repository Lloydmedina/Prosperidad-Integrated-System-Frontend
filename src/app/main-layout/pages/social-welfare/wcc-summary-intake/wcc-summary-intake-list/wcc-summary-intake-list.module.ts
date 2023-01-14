import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccSummaryIntakeListRoutingModule } from './wcc-summary-intake-list-routing.module';
import { WccSummaryIntakeListComponent } from './wcc-summary-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccSummaryIntakeListComponent
  ],
  imports: [
    CommonModule,
    WccSummaryIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccSummaryIntakeListModule { }
