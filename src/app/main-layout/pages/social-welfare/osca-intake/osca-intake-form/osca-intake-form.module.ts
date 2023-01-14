import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaIntakeFormRoutingModule } from './osca-intake-form-routing.module';
import { OscaIntakeFormComponent } from './osca-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    OscaIntakeFormComponent
  ],
  imports: [
    CommonModule,
    OscaIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class OscaIntakeFormModule { }
