import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OscaIntakePrintFormRoutingModule } from './osca-intake-print-form-routing.module';
import { OscaIntakePrintFormComponent } from './osca-intake-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    OscaIntakePrintFormComponent
  ],
  imports: [
    CommonModule,
    OscaIntakePrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class OscaIntakePrintFormModule { }
