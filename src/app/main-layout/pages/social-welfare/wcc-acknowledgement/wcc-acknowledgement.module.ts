import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccAcknowledgementRoutingModule } from './wcc-acknowledgement-routing.module';
import { WccAcknowledgementComponent } from './wcc-acknowledgement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccAcknowledgementComponent
  ],
  imports: [
    CommonModule,
    WccAcknowledgementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccAcknowledgementModule { }
