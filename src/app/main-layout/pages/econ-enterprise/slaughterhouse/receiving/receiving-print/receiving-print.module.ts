import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingPrintComponent } from './receiving-print.component';
import { ReceivingPrintRoutingModule } from './receiving-print-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';

@NgModule({
  imports: [
    CommonModule,
    ReceivingPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [ReceivingPrintComponent]
})
export class ReceivingPrintModule { }
