import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccRegistrationRoutingModule } from './wcc-registration-routing.module';
import { WccRegistrationComponent } from './wcc-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccRegistrationComponent
  ],
  imports: [
    CommonModule,
    WccRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccRegistrationModule { }
