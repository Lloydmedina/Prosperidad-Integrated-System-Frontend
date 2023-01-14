import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationSetupFormRoutingModule } from './application-setup-form-routing.module';
import { ApplicationSetupFormComponent } from './application-setup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ApplicationSetupFormComponent
  ],
  imports: [
    CommonModule,
    ApplicationSetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ApplicationSetupFormModule { }
