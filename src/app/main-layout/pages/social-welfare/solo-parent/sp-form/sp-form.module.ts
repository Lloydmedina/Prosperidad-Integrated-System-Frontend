import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpFormRoutingModule } from './sp-form-routing.module';
import { SpFormComponent } from './sp-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    SpFormComponent
  ],
  imports: [
    CommonModule,
    SpFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class SpFormModule { }
