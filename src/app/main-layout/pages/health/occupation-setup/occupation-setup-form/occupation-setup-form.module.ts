import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupationSetupFormRoutingModule } from './occupation-setup-form-routing.module';
import { OccupationSetupFormComponent } from './occupation-setup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OccupationSetupFormComponent
  ],
  imports: [
    CommonModule,
    OccupationSetupFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OccupationSetupFormModule { }
