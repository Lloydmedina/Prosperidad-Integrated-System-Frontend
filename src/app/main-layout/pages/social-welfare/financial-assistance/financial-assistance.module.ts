import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialAssistanceRoutingModule } from './financial-assistance-routing.module';
import { FinancialAssistanceComponent } from './financial-assistance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  declarations: [
    FinancialAssistanceComponent
  ],
  imports: [
    CommonModule,
    FinancialAssistanceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class FinancialAssistanceModule { }
