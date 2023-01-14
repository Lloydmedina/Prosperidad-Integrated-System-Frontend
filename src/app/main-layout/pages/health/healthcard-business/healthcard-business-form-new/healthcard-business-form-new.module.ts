import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcardBusinessFormNewRoutingModule } from './healthcard-business-form-new-routing.module';
import { HealthcardBusinessFormNewComponent } from './healthcard-business-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    HealthcardBusinessFormNewComponent
  ],
  imports: [
    CommonModule,
    HealthcardBusinessFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class HealthcardBusinessFormNewModule { }
