import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaycareCenterFormRoutingModule } from './daycare-center-form-routing.module';
import { DaycareCenterFormComponent } from './daycare-center-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DaycareCenterFormComponent
  ],
  imports: [
    CommonModule,
    DaycareCenterFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DaycareCenterFormModule { }
