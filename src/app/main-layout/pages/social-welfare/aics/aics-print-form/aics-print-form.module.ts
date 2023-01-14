import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsPrintFormRoutingModule } from './aics-print-form-routing.module';
import { AicsPrintFormComponent } from './aics-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AicsPrintFormComponent
  ],
  imports: [
    CommonModule,
    AicsPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AicsPrintFormModule { }
