import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildIntakeRoutingModule } from './child-intake-routing.module';
import { ChildIntakeComponent } from './child-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ChildIntakeComponent
  ],
  imports: [
    CommonModule,
    ChildIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ChildIntakeModule { }
