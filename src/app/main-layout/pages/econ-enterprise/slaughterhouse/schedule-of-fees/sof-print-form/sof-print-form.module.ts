import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofPrintFormRoutingModule } from './sof-print-form-routing.module';
import { SofPrintFormComponent } from './sof-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    SofPrintFormComponent
  ],
  imports: [
    CommonModule,
    SofPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SofPrintFormModule { }
