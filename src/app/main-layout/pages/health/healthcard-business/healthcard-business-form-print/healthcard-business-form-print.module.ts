import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthcardBusinessFormPrintRoutingModule } from './healthcard-business-form-print-routing.module';
import { HealthcardBusinessFormPrintComponent } from './healthcard-business-form-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintComponent } from 'src/app/main-layout/template/header-print/header-print.component';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';

import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    HealthcardBusinessFormPrintComponent
  ],
  imports: [
    CommonModule,
    HealthcardBusinessFormPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,

    NgxPrintModule

  ]
})
export class HealthcardBusinessFormPrintModule { }
