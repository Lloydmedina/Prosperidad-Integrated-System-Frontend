import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationCenterListRoutingModule } from './evacuation-center-list-routing.module';
import { EvacuationCenterListComponent } from './evacuation-center-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    EvacuationCenterListComponent
  ],
  imports: [
    CommonModule,
    EvacuationCenterListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class EvacuationCenterListModule { }
