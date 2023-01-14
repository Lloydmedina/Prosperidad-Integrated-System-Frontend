import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsFormRoutingModule } from './bs-form-routing.module';
import { BsFormComponent } from './bs-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    BsFormComponent
  ],
  imports: [
    CommonModule,
    BsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class BsFormModule { }
