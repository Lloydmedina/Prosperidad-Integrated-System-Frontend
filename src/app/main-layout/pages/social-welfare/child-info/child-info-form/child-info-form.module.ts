import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildInfoFormRoutingModule } from './child-info-form-routing.module';
import { ChildInfoFormComponent } from './child-info-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';


@NgModule({
  declarations: [
    ChildInfoFormComponent
  ],
  imports: [
    CommonModule,
    ChildInfoFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class ChildInfoFormModule { }
