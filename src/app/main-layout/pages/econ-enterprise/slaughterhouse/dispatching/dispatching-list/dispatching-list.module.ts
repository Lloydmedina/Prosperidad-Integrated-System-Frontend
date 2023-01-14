import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchingListRoutingModule } from './dispatching-list-routing.module';
import { DispatchingListComponent } from './dispatching-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    DispatchingListComponent
  ],
  imports: [
    CommonModule,
    DispatchingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class DispatchingListModule { }
