import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderFormRoutingModule } from './service-provider-form-routing.module';
import { ServiceProviderFormComponent } from './service-provider-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ServiceProviderFormComponent
  ],
  imports: [
    CommonModule,
    ServiceProviderFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ServiceProviderFormModule { }
