import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcardBusinessFormRoutingModule } from './healthcard-business-form-routing.module';
import { HealthcardBusinessFormComponent } from './healthcard-business-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    HealthcardBusinessFormComponent
  ],
  imports: [
    CommonModule,
    HealthcardBusinessFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class HealthcardBusinessFormModule { }
