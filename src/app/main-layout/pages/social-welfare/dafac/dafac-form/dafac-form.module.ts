import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacFormRoutingModule } from './dafac-form-routing.module';
import { DafacFormComponent } from './dafac-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { EvacuationBrowseModule } from 'src/app/main-layout/template/evacuation-browse/evacuation-browse.module';


@NgModule({
  declarations: [
    DafacFormComponent
  ],
  imports: [
    CommonModule,
    DafacFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    EvacuationBrowseModule
  ]
})
export class DafacFormModule { }
