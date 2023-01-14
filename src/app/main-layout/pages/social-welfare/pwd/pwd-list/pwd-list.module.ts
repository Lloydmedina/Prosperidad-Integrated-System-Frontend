import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdListRoutingModule } from './pwd-list-routing.module';
import { PwdListComponent } from './pwd-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    PwdListComponent
  ],
  imports: [
    CommonModule,
    PwdListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class PwdListModule { }
