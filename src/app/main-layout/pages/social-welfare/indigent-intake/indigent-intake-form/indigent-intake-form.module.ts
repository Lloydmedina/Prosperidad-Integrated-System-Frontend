import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentIntakeFormRoutingModule } from './indigent-intake-form-routing.module';
import { IndigentIntakeFormComponent } from './indigent-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IndigentIntakeFormComponent
  ],
  imports: [
    CommonModule,
    IndigentIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IndigentIntakeFormModule { }
