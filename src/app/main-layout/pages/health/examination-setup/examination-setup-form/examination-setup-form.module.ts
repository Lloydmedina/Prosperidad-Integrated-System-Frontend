import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationSetupFormRoutingModule } from './examination-setup-form-routing.module';
import { ExaminationSetupFormComponent } from './examination-setup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ExaminationSetupFormComponent
  ],
  imports: [
    CommonModule,
    ExaminationSetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ExaminationSetupFormModule { }
