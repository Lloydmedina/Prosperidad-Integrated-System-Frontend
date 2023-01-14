import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchingRoutingModule } from './dispatching-routing.module';
import { DispatchingComponent } from './dispatching.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    DispatchingComponent
  ],
  imports: [
    CommonModule,
    DispatchingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class DispatchingModule { }
