import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterPotabilityRoutingModule } from './water-potability-routing.module';
import { WaterPotabilityComponent } from './water-potability.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WaterPotabilityComponent
  ],
  imports: [
    CommonModule,
    WaterPotabilityRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WaterPotabilityModule { }
