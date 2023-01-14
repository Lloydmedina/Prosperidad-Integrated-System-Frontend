import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsIntakeListRoutingModule } from './aics-intake-list-routing.module';
import { AicsIntakeListComponent } from './aics-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    AicsIntakeListComponent
  ],
  imports: [
    CommonModule,
    AicsIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class AicsIntakeListModule { }
