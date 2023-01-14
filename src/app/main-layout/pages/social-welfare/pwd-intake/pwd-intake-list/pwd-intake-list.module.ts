import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdIntakeListRoutingModule } from './pwd-intake-list-routing.module';
import { PwdIntakeListComponent } from './pwd-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    PwdIntakeListComponent
  ],
  imports: [
    CommonModule,
    PwdIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class PwdIntakeListModule { }
