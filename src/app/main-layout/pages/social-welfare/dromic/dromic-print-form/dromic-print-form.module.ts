import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DromicPrintFormRoutingModule } from './dromic-print-form-routing.module';
import { DromicPrintFormComponent } from './dromic-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DromicPrintFormComponent
  ],
  imports: [
    CommonModule,
    DromicPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DromicPrintFormModule { }
