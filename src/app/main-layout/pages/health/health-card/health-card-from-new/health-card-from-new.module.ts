import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthCardFromNewComponent } from './health-card-from-new.component';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

import { HealthCardFormNewRoutingModule } from './health-card-form-new.routing.module';
//import { HcTansactionListComponent } from './hc-tansaction-list/hc-tansaction-list.component';
import { NgxPrintModule } from 'ngx-print';
@NgModule({
  imports: [
    CommonModule,

    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    HealthCardFormNewRoutingModule,
    NgxPrintModule
  ],
  declarations: [HealthCardFromNewComponent,
              ]
})
export class HealthCardFromNewModule { }
