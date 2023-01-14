import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaryPermitListPrintRoutingModule } from './sanitary-permit-list-print-routing.module';
import { SanitaryPermitListPrintComponent } from './sanitary-permit-list-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [SanitaryPermitListPrintComponent],
  imports: [
    CommonModule,
    SanitaryPermitListPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgZorroModule,
    DateFilterModule,
    NgxPrintModule
  ]
})
export class SanitaryPermitListPrintModule { }
