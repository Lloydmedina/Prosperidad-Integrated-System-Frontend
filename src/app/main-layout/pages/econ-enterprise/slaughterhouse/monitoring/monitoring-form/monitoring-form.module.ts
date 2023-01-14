import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitoringFormRoutingModule } from './monitoring-form-routing.module';
import { MonitoringFormComponent } from './monitoring-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    MonitoringFormComponent
  ],
  imports: [
    CommonModule,
    MonitoringFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    LocaleCurrencyInputModule
  ]
})
export class MonitoringFormModule { }
