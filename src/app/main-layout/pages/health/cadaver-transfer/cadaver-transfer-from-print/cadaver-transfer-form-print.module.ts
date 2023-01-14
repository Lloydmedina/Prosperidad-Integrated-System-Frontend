import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadaverTransferFormPrintRoutingModule } from './cadaver-transfer-form-print-routing.module';
import { CadaverTransferFromPrintComponent } from './cadaver-transfer-from-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    CadaverTransferFromPrintComponent
  ],
  imports: [
    CommonModule,
    CadaverTransferFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    NgxPrintModule
  ]
})
export class CadaverTransferFormPrintModule { }
