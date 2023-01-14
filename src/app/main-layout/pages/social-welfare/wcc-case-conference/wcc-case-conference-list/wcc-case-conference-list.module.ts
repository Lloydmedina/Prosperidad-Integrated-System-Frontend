import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceListRoutingModule } from './wcc-case-conference-list-routing.module';
import { WccCaseConferenceListComponent } from './wcc-case-conference-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccCaseConferenceListComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    DateFilterModule
  ]
})
export class WccCaseConferenceListModule { }
