import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupationSetupRoutingModule } from './occupation-setup-routing.module';
import { OccupationSetupComponent } from './occupation-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    OccupationSetupComponent
  ],
  imports: [
    CommonModule,
    OccupationSetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class OccupationSetupModule { }
