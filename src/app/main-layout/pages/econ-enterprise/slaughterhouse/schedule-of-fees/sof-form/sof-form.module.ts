import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SofFormRoutingModule } from './sof-form-routing.module';
import { SofFormComponent } from './sof-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    SofFormComponent
  ],
  imports: [
    CommonModule,
    SofFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class SofFormModule { }
