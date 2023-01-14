import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsFormRoutingModule } from './aics-form-routing.module';
import { AicsFormComponent } from './aics-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    AicsFormComponent
  ],
  imports: [
    CommonModule,
    AicsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class AicsFormModule { }
