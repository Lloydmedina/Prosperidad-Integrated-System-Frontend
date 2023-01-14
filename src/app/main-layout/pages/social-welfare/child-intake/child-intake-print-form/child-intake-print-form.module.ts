import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildIntakePrintFormRoutingModule } from './child-intake-print-form-routing.module';
import { ChildIntakePrintFormComponent } from './child-intake-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    ChildIntakePrintFormComponent
  ],
  imports: [
    CommonModule,
    ChildIntakePrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule
  ]
})
export class ChildIntakePrintFormModule { }
