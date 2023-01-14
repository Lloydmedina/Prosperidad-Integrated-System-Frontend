import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupationSetupListRoutingModule } from './occupation-setup-list-routing.module';
import { OccupationSetupListComponent } from './occupation-setup-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    OccupationSetupListComponent
  ],
  imports: [
    CommonModule,
    OccupationSetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class OccupationSetupListModule { }
