import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateFilterRoutingModule } from './date-filter-routing.module';
import { DateFilterComponent } from './date-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DateFilterComponent
  ],
  exports: [DateFilterComponent],
  imports: [
    CommonModule,
    DateFilterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DateFilterModule { }
