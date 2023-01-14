import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpIntakeFormRoutingModule } from './sp-intake-form-routing.module';
import { SpIntakeFormComponent } from './sp-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    SpIntakeFormComponent
  ],
  imports: [
    CommonModule,
    SpIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class SpIntakeFormModule { }
