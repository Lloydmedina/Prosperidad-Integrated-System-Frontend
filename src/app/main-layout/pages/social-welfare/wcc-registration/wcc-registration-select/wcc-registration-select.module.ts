import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccRegistrationSelectRoutingModule } from './wcc-registration-select-routing.module';
import { WccRegistrationSelectComponent } from './wcc-registration-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    WccRegistrationSelectComponent
  ],
  imports: [
    CommonModule,
    WccRegistrationSelectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class WccRegistrationSelectModule { }
