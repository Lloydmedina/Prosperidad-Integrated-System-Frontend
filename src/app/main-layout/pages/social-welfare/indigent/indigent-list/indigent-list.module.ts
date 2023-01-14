import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentListRoutingModule } from './indigent-list-routing.module';
import { IndigentListComponent } from './indigent-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    IndigentListComponent
  ],
  imports: [
    CommonModule,
    IndigentListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class IndigentListModule { }
