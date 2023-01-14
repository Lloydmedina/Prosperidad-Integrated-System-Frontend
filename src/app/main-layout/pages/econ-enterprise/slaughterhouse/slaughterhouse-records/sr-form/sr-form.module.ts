import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SrFormRoutingModule } from './sr-form-routing.module';
import { SrFormComponent } from './sr-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    SrFormComponent
  ],
  imports: [
    CommonModule,
    SrFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class SrFormModule { }
