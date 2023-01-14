import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentIntakeListRoutingModule } from './indigent-intake-list-routing.module';
import { IndigentIntakeListComponent } from './indigent-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    IndigentIntakeListComponent
  ],
  imports: [
    CommonModule,
    IndigentIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class IndigentIntakeListModule { }
