import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SrPrintListRoutingModule } from './sr-print-list-routing.module';
import { SrPrintListComponent } from './sr-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    SrPrintListComponent
  ],
  imports: [
    CommonModule,
    SrPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SrPrintListModule { }
