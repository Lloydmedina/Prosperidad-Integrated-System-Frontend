import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { EngineeringComponent } from './engineering.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EngineeringComponent
  ],
  imports: [
    CommonModule,
    EngineeringRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EngineeringModule { }
