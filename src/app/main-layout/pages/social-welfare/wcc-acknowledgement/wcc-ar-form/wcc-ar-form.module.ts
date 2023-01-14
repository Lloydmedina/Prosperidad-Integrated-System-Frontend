import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccArFormRoutingModule } from './wcc-ar-form-routing.module';
import { WccArFormComponent } from './wcc-ar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [WccArFormComponent],
  imports: [
    CommonModule,
    WccArFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class WccArFormModule { }
