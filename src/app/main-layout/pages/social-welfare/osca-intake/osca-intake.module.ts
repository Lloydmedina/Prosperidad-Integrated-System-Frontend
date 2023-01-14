import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaIntakeRoutingModule } from './osca-intake-routing.module';
import { OscaIntakeComponent } from './osca-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OscaIntakeComponent
  ],
  imports: [
    CommonModule,
    OscaIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OscaIntakeModule { }
