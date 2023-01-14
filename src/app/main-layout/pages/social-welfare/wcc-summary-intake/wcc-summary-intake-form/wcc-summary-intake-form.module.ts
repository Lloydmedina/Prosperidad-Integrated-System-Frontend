import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccSummaryIntakeFormRoutingModule } from './wcc-summary-intake-form-routing.module';
import { WccSummaryIntakeFormComponent } from './wcc-summary-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    WccSummaryIntakeFormComponent
  ],
  imports: [
    CommonModule,
    WccSummaryIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class WccSummaryIntakeFormModule { }
