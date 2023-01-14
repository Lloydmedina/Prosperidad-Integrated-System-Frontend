import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationCenterFormRoutingModule } from './evacuation-center-form-routing.module';
import { EvacuationCenterFormComponent } from './evacuation-center-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EvacuationCenterFormComponent
  ],
  imports: [
    CommonModule,
    EvacuationCenterFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EvacuationCenterFormModule { }
