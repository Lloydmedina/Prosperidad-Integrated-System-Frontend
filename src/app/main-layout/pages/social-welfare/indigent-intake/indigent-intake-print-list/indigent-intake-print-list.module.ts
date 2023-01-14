import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndigentIntakePrintListRoutingModule } from './indigent-intake-print-list-routing.module';
import { IndigentIntakePrintListComponent } from './indigent-intake-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    IndigentIntakePrintListComponent
  ],
  imports: [
    CommonModule,
    IndigentIntakePrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule
  ]
})
export class IndigentIntakePrintListModule { }
