import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoloParentIntakeRoutingModule } from './solo-parent-intake-routing.module';
import { SoloParentIntakeComponent } from './solo-parent-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    SoloParentIntakeComponent
  ],
  imports: [
    CommonModule,
    SoloParentIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SoloParentIntakeModule { }
