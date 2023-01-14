import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonFilterModule } from '../../template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    HealthComponent
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonFilterModule
  ]
})
export class HealthModule { }
