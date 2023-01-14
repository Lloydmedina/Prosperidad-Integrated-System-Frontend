import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterPotabilityFormRoutingModule } from './water-potability-form-routing.module';
import { WaterPotabilityFormComponent } from './water-potability-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';


@NgModule({
  declarations: [
    WaterPotabilityFormComponent
  ],
  imports: [
    CommonModule,
    WaterPotabilityFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    PersonFilterModule
  ]
})
export class WaterPotabilityFormModule { }
