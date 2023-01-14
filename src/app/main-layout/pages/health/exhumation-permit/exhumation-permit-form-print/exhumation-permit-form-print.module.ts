import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhumationPermitFormPrintRoutingModule } from './exhumation-permit-form-print-routing.module';
import { ExhumationPermitFormPrintComponent } from './exhumation-permit-form-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    ExhumationPermitFormPrintComponent
  ],
  imports: [
    CommonModule,
    ExhumationPermitFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    NgxPrintModule
  ]
})
export class ExhumationPermitFormPrintModule { }
