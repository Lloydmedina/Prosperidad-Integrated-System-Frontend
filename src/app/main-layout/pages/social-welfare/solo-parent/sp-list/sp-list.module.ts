import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpListRoutingModule } from './sp-list-routing.module';
import { SpListComponent } from './sp-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    SpListComponent
  ],
  imports: [
    CommonModule,
    SpListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class SpListModule { }
