import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SrListRoutingModule } from './sr-list-routing.module';
import { SrListComponent } from './sr-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    SrListComponent
  ],
  imports: [
    CommonModule,
    SrListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class SrListModule { }
