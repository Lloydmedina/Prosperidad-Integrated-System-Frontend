import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacIntakeListRoutingModule } from './dafac-intake-list-routing.module';
import { DafacIntakeListComponent } from './dafac-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    DafacIntakeListComponent
  ],
  imports: [
    CommonModule,
    DafacIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class DafacIntakeListModule { }
