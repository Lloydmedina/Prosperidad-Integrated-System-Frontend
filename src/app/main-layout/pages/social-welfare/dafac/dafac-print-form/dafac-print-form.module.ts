import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacPrintFormRoutingModule } from './dafac-print-form-routing.module';
import { DafacPrintFormComponent } from './dafac-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DafacPrintFormComponent
  ],
  imports: [
    CommonModule,
    DafacPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class DafacPrintFormModule { }
