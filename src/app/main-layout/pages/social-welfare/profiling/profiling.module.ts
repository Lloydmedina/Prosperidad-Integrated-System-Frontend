import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilingRoutingModule } from './profiling-routing.module';
import { ProfilingComponent } from './profiling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    ProfilingComponent
  ],
  imports: [
    CommonModule,
    ProfilingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class ProfilingModule { }
