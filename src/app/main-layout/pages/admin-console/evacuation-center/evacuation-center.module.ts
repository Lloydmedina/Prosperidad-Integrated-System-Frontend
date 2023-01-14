import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationCenterRoutingModule } from './evacuation-center-routing.module';
import { EvacuationCenterComponent } from './evacuation-center.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EvacuationCenterComponent
  ],
  imports: [
    CommonModule,
    EvacuationCenterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EvacuationCenterModule { }
