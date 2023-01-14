import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccRegistrationListRoutingModule } from './wcc-registration-list-routing.module';
import { WccRegistrationListComponent } from './wcc-registration-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    WccRegistrationListComponent
  ],
  imports: [
    CommonModule,
    WccRegistrationListRoutingModule,
    ReactiveFormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccRegistrationListModule { }
