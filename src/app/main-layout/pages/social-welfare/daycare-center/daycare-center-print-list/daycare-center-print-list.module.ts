import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaycareCenterPrintListRoutingModule } from './daycare-center-print-list-routing.module';
import { DaycareCenterPrintListComponent } from './daycare-center-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    DaycareCenterPrintListComponent
  ],
  imports: [
    CommonModule,
    DaycareCenterPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class DaycareCenterPrintListModule { }
