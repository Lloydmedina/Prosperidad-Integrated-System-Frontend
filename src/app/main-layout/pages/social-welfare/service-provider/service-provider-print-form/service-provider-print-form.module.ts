import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderPrintFormRoutingModule } from './service-provider-print-form-routing.module';
import { ServiceProviderPrintFormComponent } from './service-provider-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ServiceProviderPrintFormComponent
  ],
  imports: [
    CommonModule,
    ServiceProviderPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ServiceProviderPrintFormModule { }
