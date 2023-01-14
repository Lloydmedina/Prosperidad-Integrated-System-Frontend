import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsIntakeRoutingModule } from './aics-intake-routing.module';
import { AicsIntakeComponent } from './aics-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AicsIntakeComponent
  ],
  imports: [
    CommonModule,
    AicsIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AicsIntakeModule { }
