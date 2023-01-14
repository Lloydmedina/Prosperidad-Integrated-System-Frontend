import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralIntakeListRoutingModule } from './general-intake-list-routing.module';
import { GeneralIntakeListComponent } from './general-intake-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    GeneralIntakeListComponent
  ],
  imports: [
    CommonModule,
    GeneralIntakeListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class GeneralIntakeListModule { }
