import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessSetupListRoutingModule } from './business-setup-list-routing.module';
import { BusinessSetupListComponent } from './business-setup-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    BusinessSetupListComponent
  ],
  imports: [
    CommonModule,
    BusinessSetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class BusinessSetupListModule { }
