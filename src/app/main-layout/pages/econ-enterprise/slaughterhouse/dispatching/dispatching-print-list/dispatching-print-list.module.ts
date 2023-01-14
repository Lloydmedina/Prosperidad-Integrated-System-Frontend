import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchingPrintListRoutingModule } from './dispatching-print-list-routing.module';
import { DispatchingPrintListComponent } from './dispatching-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DispatchingPrintListComponent
  ],
  imports: [
    CommonModule,
    DispatchingPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DispatchingPrintListModule { }
