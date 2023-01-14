import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccArListRoutingModule } from './wcc-ar-list-routing.module';
import { WccArListComponent } from './wcc-ar-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccArListComponent
  ],
  imports: [
    CommonModule,
    WccArListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccArListModule { }
