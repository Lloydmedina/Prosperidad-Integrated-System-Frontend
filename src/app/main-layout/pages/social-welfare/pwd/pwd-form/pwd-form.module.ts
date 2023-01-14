import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdFormRoutingModule } from './pwd-form-routing.module';
import { PwdFormComponent } from './pwd-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    PwdFormComponent
  ],
  imports: [
    CommonModule,
    PwdFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    NgxMaskModule.forRoot()
  ]
})
export class PwdFormModule { }
