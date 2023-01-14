import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccDischargeFormRoutingModule } from './wcc-discharge-form-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { WccDischargeFormComponent } from './wcc-discharge-form.component';


@NgModule({
  declarations: [
    WccDischargeFormComponent
  ],
  imports: [
    CommonModule,
    WccDischargeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccDischargeFormModule { }
