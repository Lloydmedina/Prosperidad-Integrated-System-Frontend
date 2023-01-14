import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccDfAddRoutingModule } from './wcc-df-add-routing.module';
import { WccDfAddComponent } from './wcc-df-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccDfAddComponent
  ],
  imports: [
    CommonModule,
    WccDfAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccDfAddModule { }
