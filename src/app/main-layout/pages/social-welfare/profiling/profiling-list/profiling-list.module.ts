import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilingListRoutingModule } from './profiling-list-routing.module';
import { ProfilingListComponent } from './profiling-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    ProfilingListComponent
  ],
  imports: [
    CommonModule,
    ProfilingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ProfilingListModule { }
