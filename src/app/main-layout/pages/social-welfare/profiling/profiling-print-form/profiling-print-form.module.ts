import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilingPrintFormRoutingModule } from './profiling-print-form-routing.module';
import { ProfilingPrintFormComponent } from './profiling-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ProfilingPrintFormComponent
  ],
  imports: [
    CommonModule,
    ProfilingPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ProfilingPrintFormModule { }
