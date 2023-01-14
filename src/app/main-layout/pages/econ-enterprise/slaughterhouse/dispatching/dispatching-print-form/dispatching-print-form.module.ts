import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchingPrintFormRoutingModule } from './dispatching-print-form-routing.module';
import { DispatchingPrintFormComponent } from './dispatching-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    DispatchingPrintFormComponent
  ],
  imports: [
    CommonModule,
    DispatchingPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class DispatchingPrintFormModule { }
