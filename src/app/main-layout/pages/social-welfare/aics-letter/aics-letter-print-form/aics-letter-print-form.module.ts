import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsLetterPrintFormRoutingModule } from './aics-letter-print-form-routing.module';
import { AicsLetterPrintFormComponent } from './aics-letter-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    AicsLetterPrintFormComponent
  ],
  imports: [
    CommonModule,
    AicsLetterPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AicsLetterPrintFormModule { }
