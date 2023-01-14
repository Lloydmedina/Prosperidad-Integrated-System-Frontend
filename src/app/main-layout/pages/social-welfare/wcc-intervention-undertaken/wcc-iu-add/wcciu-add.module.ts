import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WcciuAddRoutingModule } from './wcciu-add-routing.module';
import { WcciuAddComponent } from './wcciu-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WcciuAddComponent
  ],
  imports: [
    CommonModule,
    WcciuAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule,
    DateFilterModule
  ]
})
export class WcciuAddModule { }
