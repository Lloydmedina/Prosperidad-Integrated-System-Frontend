import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTitlePrintComponent } from './account-title-print.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { AccountTitlePrintRoutingModule } from './account-title-print-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountTitlePrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [AccountTitlePrintComponent]
})
export class AccountTitlePrintModule { }
