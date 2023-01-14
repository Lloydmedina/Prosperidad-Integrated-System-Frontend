import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsPrintFormRoutingModule } from './bs-print-form-routing.module';
import { BsPrintFormComponent } from './bs-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    BsPrintFormComponent
  ],
  imports: [
    CommonModule,
    BsPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class BsPrintFormModule { }
