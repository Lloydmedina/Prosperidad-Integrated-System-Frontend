import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnteMortemListRoutingModule } from './ante-mortem-list-routing.module';
import { AnteMortemListComponent } from './ante-mortem-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    AnteMortemListComponent
  ],
  imports: [
    CommonModule,
    AnteMortemListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class AnteMortemListModule { }
