import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthCardListPrintComponent } from './health-card-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HealthCardListPrintRoutingModule } from './health-card-lis-print.routing.module';


@NgModule({
  declarations: [HealthCardListPrintComponent,],
  imports: [
    HealthCardListPrintRoutingModule,
    CommonModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule,
  ]

})
export class HealthCardListPrintModule { }
