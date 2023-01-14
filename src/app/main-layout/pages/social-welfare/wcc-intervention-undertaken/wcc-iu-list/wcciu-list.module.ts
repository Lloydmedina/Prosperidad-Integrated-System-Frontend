import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcciuListRoutingModule } from './wcciu-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { WcciuListComponent } from './wcciu-list.component';


@NgModule({
  declarations: [
    WcciuListComponent
  ],
  imports: [
    CommonModule,
    WcciuListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WcciuListModule { }
