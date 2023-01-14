import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvacuationPrintListRoutingModule } from './evacuation-print-list-routing.module';
import { EvacuationPrintListComponent } from './evacuation-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    EvacuationPrintListComponent
  ],
  imports: [
    CommonModule,
    EvacuationPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class EvacuationPrintListModule { }
