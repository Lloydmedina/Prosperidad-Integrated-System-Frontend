import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccRegistrationFormRoutingModule } from './wcc-registration-form-routing.module';
import { WccRegistrationFormComponent } from './wcc-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    WccRegistrationFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccRegistrationFormModule { }
