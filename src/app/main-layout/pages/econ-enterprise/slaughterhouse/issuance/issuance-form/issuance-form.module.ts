import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuanceFormRoutingModule } from './issuance-form-routing.module';
import { IssuanceFormComponent } from './issuance-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    IssuanceFormComponent
  ],
  imports: [
    CommonModule,
    IssuanceFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class IssuanceFormModule { }
