import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdIntakeFormRoutingModule } from './pwd-intake-form-routing.module';
import { PwdIntakeFormComponent } from './pwd-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    PwdIntakeFormComponent
  ],
  imports: [
    CommonModule,
    PwdIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class PwdIntakeFormModule { }
