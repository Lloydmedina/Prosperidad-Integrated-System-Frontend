import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccArAddRoutingModule } from './wcc-ar-add-routing.module';
import { WccArAddComponent } from './wcc-ar-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccArAddComponent
  ],
  imports: [
    CommonModule,
    WccArAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccArAddModule { }
