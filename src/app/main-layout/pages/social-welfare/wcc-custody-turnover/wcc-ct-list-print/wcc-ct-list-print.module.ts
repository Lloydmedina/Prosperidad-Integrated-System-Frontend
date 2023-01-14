import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccCtListPrintRoutingModule } from './wcc-ct-list-print-routing.module';
import { WccCtListPrintComponent } from './wcc-ct-list-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [WccCtListPrintComponent],
  imports: [
    CommonModule,
    WccCtListPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule

  ]
})
export class WccCtListPrintModule { }
