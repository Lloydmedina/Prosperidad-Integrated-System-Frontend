import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofListRoutingModule } from './sof-list-routing.module';
import { SofListComponent } from './sof-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    SofListComponent
  ],
  imports: [
    CommonModule,
    SofListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class SofListModule { }
