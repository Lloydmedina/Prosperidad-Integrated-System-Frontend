import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCtListRoutingModule } from './wcc-ct-list-routing.module';
import { WccCtListComponent } from './wcc-ct-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccCtListComponent
  ],
  imports: [
    CommonModule,
    WccCtListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccCtListModule { }
