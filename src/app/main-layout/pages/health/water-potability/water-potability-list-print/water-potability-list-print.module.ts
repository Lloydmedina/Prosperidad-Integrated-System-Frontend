import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterPotabilityListPrintRoutingModule } from './water-potability-list-print-routing.module';
import { WaterPotabilityListPrintComponent } from './water-potability-list-print.component';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WaterPotabilityListPrintComponent
  ],
  imports: [
    CommonModule,
    WaterPotabilityListPrintRoutingModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class WaterPotabilityListPrintModule { }
