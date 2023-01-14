import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcardBusinessRoutingModule } from './healthcard-business-routing.module';
import { HealthcardBusinessComponent } from './healthcard-business.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    HealthcardBusinessComponent
  ],
  imports: [
    CommonModule,
    HealthcardBusinessRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class HealthcardBusinessModule { }
