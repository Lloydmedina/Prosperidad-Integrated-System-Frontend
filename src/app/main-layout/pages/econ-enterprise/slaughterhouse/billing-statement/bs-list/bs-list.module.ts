import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsListRoutingModule } from './bs-list-routing.module';
import { BsListComponent } from './bs-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    BsListComponent
  ],
  imports: [
    CommonModule,
    BsListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class BsListModule { }
