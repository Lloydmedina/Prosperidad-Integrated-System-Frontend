import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpIntakePrintListRoutingModule } from './sp-intake-print-list-routing.module';
import { SpIntakePrintListComponent } from './sp-intake-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    SpIntakePrintListComponent
  ],
  imports: [
    CommonModule,
    SpIntakePrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class SpIntakePrintListModule { }
