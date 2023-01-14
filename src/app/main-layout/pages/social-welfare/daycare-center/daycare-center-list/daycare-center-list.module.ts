import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaycareCenterListRoutingModule } from './daycare-center-list-routing.module';
import { DaycareCenterListComponent } from './daycare-center-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    DaycareCenterListComponent
  ],
  imports: [
    CommonModule,
    DaycareCenterListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class DaycareCenterListModule { }
