import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccdListRoutingModule } from './eccd-list-routing.module';
import { EccdListComponent } from './eccd-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    EccdListComponent
  ],
  imports: [
    CommonModule,
    EccdListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class EccdListModule { }
