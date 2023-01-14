import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaycareCenterPrintFormRoutingModule } from './daycare-center-print-form-routing.module';
import { DaycareCenterPrintFormComponent } from './daycare-center-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    DaycareCenterPrintFormComponent
  ],
  imports: [
    CommonModule,
    DaycareCenterPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class DaycareCenterPrintFormModule { }
