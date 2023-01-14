import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaterPotabilityFormPrintRoutingModule } from './water-potability-form-print-routing.module';
import { WaterPotabilityFormPrintComponent } from './water-potability-form-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    WaterPotabilityFormPrintComponent
  ],
  imports: [
    CommonModule,
    WaterPotabilityFormPrintRoutingModule,
    HeaderPrintModule,
    FooterPrintModule,
    FormsModule,
    NgZorroModule,
    NgxPrintModule
  ]
})
export class WaterPotabilityFormPrintModule { }
