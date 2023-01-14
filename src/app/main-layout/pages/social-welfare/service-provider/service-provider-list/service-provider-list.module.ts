import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderListRoutingModule } from './service-provider-list-routing.module';
import { ServiceProviderListComponent } from './service-provider-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    ServiceProviderListComponent
  ],
  imports: [
    CommonModule,
    ServiceProviderListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ServiceProviderListModule { }
