import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpPrintListRoutingModule } from './sp-print-list-routing.module';
import { SpPrintListComponent } from './sp-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    SpPrintListComponent
  ],
  imports: [
    CommonModule,
    SpPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class SpPrintListModule { }
