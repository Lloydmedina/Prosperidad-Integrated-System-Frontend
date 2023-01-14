import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchingFormRoutingModule } from './dispatching-form-routing.module';
import { DispatchingFormComponent } from './dispatching-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    DispatchingFormComponent
  ],
  imports: [
    CommonModule,
    DispatchingFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class DispatchingFormModule { }
