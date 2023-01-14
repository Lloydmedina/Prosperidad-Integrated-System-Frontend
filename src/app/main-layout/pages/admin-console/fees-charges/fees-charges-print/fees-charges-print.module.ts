import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesChargesPrintComponent } from './fees-charges-print.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FeesChargesPrintRoutingModule } from './fees-charges-print-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeesChargesPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [FeesChargesPrintComponent]
})
export class FeesChargesPrintModule { }
