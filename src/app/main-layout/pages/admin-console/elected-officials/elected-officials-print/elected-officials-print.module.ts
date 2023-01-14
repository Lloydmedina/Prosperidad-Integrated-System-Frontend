import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectedOfficialsPrintComponent } from './elected-officials-print.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ElectedOfficialsPrintRoutingModule } from './elected-officials-print-routing.module';
import { NgxOrgChartModule } from 'ngx-org-chart';

@NgModule({
  imports: [
    CommonModule,
    ElectedOfficialsPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule,
    NgxOrgChartModule
  ],
  declarations: [ElectedOfficialsPrintComponent]
})
export class ElectedOfficialsPrintModule { }
