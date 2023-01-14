import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaIntakeListRoutingModule } from './osca-intake-list-routing.module';
import { OscaIntakeListComponent } from './osca-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    OscaIntakeListComponent
  ],
  imports: [
    CommonModule,
    OscaIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class OscaIntakeListModule { }
