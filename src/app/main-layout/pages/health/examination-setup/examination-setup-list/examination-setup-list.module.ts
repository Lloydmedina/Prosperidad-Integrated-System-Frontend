import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationSetupListRoutingModule } from './examination-setup-list-routing.module';
import { ExaminationSetupListComponent } from './examination-setup-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ExaminationSetupListComponent
  ],
  imports: [
    CommonModule,
    ExaminationSetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class ExaminationSetupListModule { }
