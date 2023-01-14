import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaListRoutingModule } from './osca-list-routing.module';
import { OscaListComponent } from './osca-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    OscaListComponent
  ],
  imports: [
    CommonModule,
    OscaListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class OscaListModule { }
