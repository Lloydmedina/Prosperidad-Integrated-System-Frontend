import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacListRoutingModule } from './dafac-list-routing.module';
import { DafacListComponent } from './dafac-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    DafacListComponent
  ],
  imports: [
    CommonModule,
    DafacListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class DafacListModule { }
