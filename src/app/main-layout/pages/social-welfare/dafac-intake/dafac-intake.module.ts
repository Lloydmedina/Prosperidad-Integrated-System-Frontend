import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacIntakeRoutingModule } from './dafac-intake-routing.module';
import { DafacIntakeComponent } from './dafac-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DafacIntakeComponent
  ],
  imports: [
    CommonModule,
    DafacIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DafacIntakeModule { }
