import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialAssistanceListRoutingModule } from './financial-assistance-list-routing.module';
import { FinancialAssistanceListComponent } from './financial-assistance-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    FinancialAssistanceListComponent
  ],
  imports: [
    CommonModule,
    FinancialAssistanceListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class FinancialAssistanceListModule { }
