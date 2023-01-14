import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildIntakeFormRoutingModule } from './child-intake-form-routing.module';
import { ChildIntakeFormComponent } from './child-intake-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    ChildIntakeFormComponent
  ],
  imports: [
    CommonModule,
    ChildIntakeFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class ChildIntakeFormModule { }
