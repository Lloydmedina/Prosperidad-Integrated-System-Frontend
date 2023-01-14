import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessPrintListComponent } from './business-print-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BusinessPrintListRoutingModule } from './business-print-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BusinessPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [BusinessPrintListComponent]
})
export class BusinessPrintListModule { }
