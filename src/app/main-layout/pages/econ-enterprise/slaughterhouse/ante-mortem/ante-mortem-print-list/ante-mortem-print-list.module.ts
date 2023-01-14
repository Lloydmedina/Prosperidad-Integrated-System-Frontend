import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnteMortemPrintListRoutingModule } from './ante-mortem-print-list-routing.module';
import { AnteMortemPrintListComponent } from './ante-mortem-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    AnteMortemPrintListComponent
  ],
  imports: [
    CommonModule,
    AnteMortemPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class AnteMortemPrintListModule { }
