import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsLetterPrintListRoutingModule } from './aics-letter-print-list-routing.module';
import { AicsLetterPrintListComponent } from './aics-letter-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AicsLetterPrintListComponent
  ],
  imports: [
    CommonModule,
    AicsLetterPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AicsLetterPrintListModule { }
