import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCtFormRoutingModule } from './wcc-ct-form-routing.module';
import { WccCtFormComponent } from './wcc-ct-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [WccCtFormComponent],
  imports: [
    CommonModule,
    WccCtFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class WccCtFormModule { }
