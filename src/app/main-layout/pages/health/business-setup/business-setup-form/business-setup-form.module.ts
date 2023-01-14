import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessSetupFormRoutingModule } from './business-setup-form-routing.module';
import { BusinessSetupFormComponent } from './business-setup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    BusinessSetupFormComponent
  ],
  imports: [
    CommonModule,
    BusinessSetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class BusinessSetupFormModule { }
