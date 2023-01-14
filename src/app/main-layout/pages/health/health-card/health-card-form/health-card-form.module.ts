import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCardFormRoutingModule } from './health-card-form-routing.module';
import { HealthCardFormComponent } from './health-card-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    HealthCardFormComponent
  ],
  imports: [
    CommonModule,
    HealthCardFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class HealthCardFormModule { }

