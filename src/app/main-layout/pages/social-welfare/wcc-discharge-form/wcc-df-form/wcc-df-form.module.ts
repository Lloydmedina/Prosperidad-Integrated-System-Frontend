import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccDfFormRoutingModule } from './wcc-df-form-routing.module';
import { WccDfFormComponent } from './wcc-df-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [WccDfFormComponent],
  imports: [
    CommonModule,
    WccDfFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    PersonsBrowseModule,
    NgZorroModule,
    LocaleCurrencyInputModule

  ]
})
export class WccDfFormModule { }
