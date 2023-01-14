import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsPrintListRoutingModule } from './bs-print-list-routing.module';
import { BsPrintListComponent } from './bs-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    BsPrintListComponent
  ],
  imports: [
    CommonModule,
    BsPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class BsPrintListModule { }
