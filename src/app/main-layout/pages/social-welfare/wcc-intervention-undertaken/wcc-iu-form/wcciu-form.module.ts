import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcciuFormRoutingModule } from './wcciu-form-routing.module';
import { WcciuFormComponent } from './wcciu-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    WcciuFormComponent
  ],
  imports: [
    CommonModule,
    WcciuFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class WcciuFormModule { }
