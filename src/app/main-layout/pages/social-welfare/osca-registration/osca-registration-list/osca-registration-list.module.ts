import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaRegistrationListRoutingModule } from './osca-registration-list-routing.module';
import { OscaRegistrationListComponent } from './osca-registration-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    OscaRegistrationListComponent
  ],
  imports: [
    CommonModule,
    OscaRegistrationListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class OscaRegistrationListModule { }
