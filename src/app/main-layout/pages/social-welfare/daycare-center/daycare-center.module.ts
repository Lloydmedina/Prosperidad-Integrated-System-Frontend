import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaycareCenterRoutingModule } from './daycare-center-routing.module';
import { DaycareCenterComponent } from './daycare-center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    DaycareCenterComponent
  ],
  imports: [
    CommonModule,
    DaycareCenterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class DaycareCenterModule { }
