import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralIntakeFormRoutingModule } from './general-intake-form-routing.module';
import { GeneralIntakeFormComponent } from './general-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    GeneralIntakeFormComponent
  ],
  imports: [
    CommonModule,
    GeneralIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class GeneralIntakeFormModule { }
