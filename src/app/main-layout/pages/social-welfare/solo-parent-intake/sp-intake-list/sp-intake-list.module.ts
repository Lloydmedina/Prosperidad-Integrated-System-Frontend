import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpIntakeListRoutingModule } from './sp-intake-list-routing.module';
import { SpIntakeListComponent } from './sp-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    SpIntakeListComponent
  ],
  imports: [
    CommonModule,
    SpIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class SpIntakeListModule { }
