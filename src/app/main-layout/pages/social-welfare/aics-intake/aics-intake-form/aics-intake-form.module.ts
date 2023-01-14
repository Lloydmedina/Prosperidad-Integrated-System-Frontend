import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsIntakeFormRoutingModule } from './aics-intake-form-routing.module';
import { AicsIntakeFormComponent } from './aics-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    AicsIntakeFormComponent
  ],
  imports: [
    CommonModule,
    AicsIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class AicsIntakeFormModule { }
