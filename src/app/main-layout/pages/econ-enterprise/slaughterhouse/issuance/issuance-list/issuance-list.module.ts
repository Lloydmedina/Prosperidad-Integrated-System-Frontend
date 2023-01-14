import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuanceListRoutingModule } from './issuance-list-routing.module';
import { IssuanceListComponent } from './issuance-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    IssuanceListComponent
  ],
  imports: [
    CommonModule,
    IssuanceListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class IssuanceListModule { }
