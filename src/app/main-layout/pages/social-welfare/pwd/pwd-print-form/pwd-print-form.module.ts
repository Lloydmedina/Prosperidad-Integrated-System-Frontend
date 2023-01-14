import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwdPrintFormRoutingModule } from './pwd-print-form-routing.module';
import { PwdPrintFormComponent } from './pwd-print-form.component';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    PwdPrintFormComponent
  ],
  imports: [
    CommonModule,
    PwdPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class PwdPrintFormModule { }
