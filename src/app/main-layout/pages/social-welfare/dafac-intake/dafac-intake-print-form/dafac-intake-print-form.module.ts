import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DafacIntakePrintFormRoutingModule } from './dafac-intake-print-form-routing.module';
import { DafacIntakePrintFormComponent } from './dafac-intake-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DafacIntakePrintFormComponent
  ],
  imports: [
    CommonModule,
    DafacIntakePrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class DafacIntakePrintFormModule { }
