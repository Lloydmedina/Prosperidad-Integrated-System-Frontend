import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccDfListRoutingModule } from './wcc-df-list-routing.module';
import { WccDfListComponent } from './wcc-df-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccDfListComponent
  ],
  imports: [
    CommonModule,
    WccDfListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccDfListModule { }
