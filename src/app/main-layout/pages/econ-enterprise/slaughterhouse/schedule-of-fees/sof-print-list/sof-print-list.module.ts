import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofPrintListRoutingModule } from './sof-print-list-routing.module';
import { SofPrintListComponent } from './sof-print-list.component';


@NgModule({
  declarations: [
    SofPrintListComponent
  ],
  imports: [
    CommonModule,
    SofPrintListRoutingModule
  ]
})
export class SofPrintListModule { }
