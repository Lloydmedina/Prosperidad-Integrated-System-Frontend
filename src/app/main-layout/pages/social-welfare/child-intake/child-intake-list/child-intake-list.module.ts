import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildIntakeListRoutingModule } from './child-intake-list-routing.module';
import { ChildIntakeListComponent } from './child-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    ChildIntakeListComponent
  ],
  imports: [
    CommonModule,
    ChildIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ChildIntakeListModule { }
