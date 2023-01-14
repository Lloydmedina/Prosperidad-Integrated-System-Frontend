import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceFormRoutingModule } from './wcc-case-conference-form-routing.module';
import { WccCaseConferenceFormComponent } from './wcc-case-conference-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    WccCaseConferenceFormComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
  ]
})
export class WccCaseConferenceFormModule { }
