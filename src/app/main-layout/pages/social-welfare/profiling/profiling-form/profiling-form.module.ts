import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilingFormRoutingModule } from './profiling-form-routing.module';
import { ProfilingFormComponent } from './profiling-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ProfilingFormComponent
  ],
  imports: [
    CommonModule,
    ProfilingFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ProfilingFormModule { }
