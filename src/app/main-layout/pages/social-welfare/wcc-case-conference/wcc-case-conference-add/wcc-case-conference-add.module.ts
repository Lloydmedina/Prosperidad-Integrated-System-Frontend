import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceAddRoutingModule } from './wcc-case-conference-add-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { WccCaseConferenceAddComponent } from './wcc-case-conference-add.component';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccCaseConferenceAddComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    DateFilterModule
  ]
})
export class WccCaseConferenceAddModule { }
