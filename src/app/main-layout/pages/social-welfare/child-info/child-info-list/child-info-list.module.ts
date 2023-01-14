import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildInfoListRoutingModule } from './child-info-list-routing.module';
import { ChildInfoListComponent } from './child-info-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    ChildInfoListComponent
  ],
  imports: [
    CommonModule,
    ChildInfoListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ChildInfoListModule { }
