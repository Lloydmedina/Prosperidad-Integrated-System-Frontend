import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { ServiceProviderComponent } from './service-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    ServiceProviderComponent
  ],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class ServiceProviderModule { }
