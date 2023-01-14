import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuancePrintListRoutingModule } from './issuance-print-list-routing.module';
import { IssuancePrintListComponent } from './issuance-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IssuancePrintListComponent
  ],
  imports: [
    CommonModule,
    IssuancePrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IssuancePrintListModule { }
