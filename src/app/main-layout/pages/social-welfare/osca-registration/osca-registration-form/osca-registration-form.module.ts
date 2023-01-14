import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaRegistrationFormRoutingModule } from './osca-registration-form-routing.module';
import { OscaRegistrationFormComponent } from './osca-registration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    OscaRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    OscaRegistrationFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class OscaRegistrationFormModule { }
