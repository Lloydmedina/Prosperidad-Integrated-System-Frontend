import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCardRoutingModule } from './health-card-routing.module';
//import { HealthCardComponent } from './health-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  declarations: [
   // HealthCardComponent
  ],
  imports: [
    CommonModule,
    HealthCardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class HealthCardModule { }
