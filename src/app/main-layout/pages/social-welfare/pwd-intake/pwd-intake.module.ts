import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdIntakeRoutingModule } from './pwd-intake-routing.module';
import { PwdIntakeComponent } from './pwd-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    PwdIntakeComponent
  ],
  imports: [
    CommonModule,
    PwdIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PwdIntakeModule { }
