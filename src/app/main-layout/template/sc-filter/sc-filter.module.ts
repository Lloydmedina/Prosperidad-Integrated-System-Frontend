import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScFilterRoutingModule } from './sc-filter-routing.module';
import { ScFilterComponent } from './sc-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ScFilterComponent
  ],
  exports: [ScFilterComponent],
  imports: [
    CommonModule,
    ScFilterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ScFilterModule { }
