import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsListRoutingModule } from './aics-list-routing.module';
import { AicsListComponent } from './aics-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    AicsListComponent
  ],
  imports: [
    CommonModule,
    AicsListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class AicsListModule { }
