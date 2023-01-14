import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccSummaryIntakeAddRoutingModule } from './wcc-summary-intake-add-routing.module';
import { WccSummaryIntakeAddComponent } from './wcc-summary-intake-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';

@NgModule({
  declarations: [
    WccSummaryIntakeAddComponent
  ],
  imports: [
    CommonModule,
    WccSummaryIntakeAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonsBrowseModule
  ]
})
export class WccSummaryIntakeAddModule { }
