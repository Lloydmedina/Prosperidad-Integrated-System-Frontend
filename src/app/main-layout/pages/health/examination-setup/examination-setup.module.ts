import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationSetupRoutingModule } from './examination-setup-routing.module';
import { ExaminationSetupComponent } from './examination-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  declarations: [
    ExaminationSetupComponent
  ],
  imports: [
    CommonModule,
    ExaminationSetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ExaminationSetupModule { }
