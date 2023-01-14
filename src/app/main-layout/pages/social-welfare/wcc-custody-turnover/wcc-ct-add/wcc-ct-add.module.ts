import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCtAddRoutingModule } from './wcc-ct-add-routing.module';
import { WccCtAddComponent } from './wcc-ct-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [WccCtAddComponent],
  imports: [
    CommonModule,
    WccCtAddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class WccCtAddModule { }
