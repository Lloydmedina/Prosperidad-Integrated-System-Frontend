import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaRegistrationRoutingModule } from './osca-registration-routing.module';
import { OscaRegistrationComponent } from './osca-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OscaRegistrationComponent
  ],
  imports: [
    CommonModule,
    OscaRegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OscaRegistrationModule { }
