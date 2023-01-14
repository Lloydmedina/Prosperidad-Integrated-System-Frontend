import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsIntakePrintListRoutingModule } from './aics-intake-print-list-routing.module';
import { AicsIntakePrintListComponent } from './aics-intake-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AicsIntakePrintListComponent
  ],
  imports: [
    CommonModule,
    AicsIntakePrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AicsIntakePrintListModule { }
