import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralIntakeRoutingModule } from './general-intake-routing.module';
import { GeneralIntakeComponent } from './general-intake.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    // GeneralIntakeComponent
  ],
  imports: [
    CommonModule,
    GeneralIntakeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class GeneralIntakeModule { }
