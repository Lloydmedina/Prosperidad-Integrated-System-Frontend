import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccDfListPrintRoutingModule } from './wcc-df-list-print-routing.module';
import { WccDfListPrintComponent } from './wcc-df-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [WccDfListPrintComponent],
  imports: [
    CommonModule,
    WccDfListPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WccDfListPrintModule { }
