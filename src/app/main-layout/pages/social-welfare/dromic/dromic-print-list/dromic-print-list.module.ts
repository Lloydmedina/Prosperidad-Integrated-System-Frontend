import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DromicPrintListRoutingModule } from './dromic-print-list-routing.module';
import { DromicPrintListComponent } from './dromic-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DromicPrintListComponent
  ],
  imports: [
    CommonModule,
    DromicPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DromicPrintListModule { }
