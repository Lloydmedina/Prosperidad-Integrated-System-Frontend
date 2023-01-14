import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCaseConferenceRoutingModule } from './wcc-case-conference-routing.module';
import { WccCaseConferenceComponent } from './wcc-case-conference.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccCaseConferenceComponent
  ],
  imports: [
    CommonModule,
    WccCaseConferenceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
  ]
})
export class WccCaseConferenceModule { }
