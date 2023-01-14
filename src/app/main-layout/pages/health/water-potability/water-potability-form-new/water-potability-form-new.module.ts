import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterPotabilityFormNewRoutingModule } from './water-potability-form-new-routing.module';
import { WaterPotabilityFormNewComponent } from './water-potability-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WaterPotabilityFormNewComponent
  ],
  imports: [
    CommonModule,
    WaterPotabilityFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WaterPotabilityFormNewModule { }
