import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacIntakeFormRoutingModule } from './dafac-intake-form-routing.module';
import { DafacIntakeFormComponent } from './dafac-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    DafacIntakeFormComponent
  ],
  imports: [
    CommonModule,
    DafacIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class DafacIntakeFormModule { }
