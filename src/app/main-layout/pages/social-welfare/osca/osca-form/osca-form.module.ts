import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaFormRoutingModule } from './osca-form-routing.module';
import { OscaFormComponent } from './osca-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    OscaFormComponent
  ],
  imports: [
    CommonModule,
    OscaFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class OscaFormModule { }
