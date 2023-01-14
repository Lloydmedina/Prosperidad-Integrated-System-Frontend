import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyPrintFormRoutingModule } from './family-print-form-routing.module';
import { FamilyPrintFormComponent } from './family-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    FamilyPrintFormComponent
  ],
  imports: [
    CommonModule,
    FamilyPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class FamilyPrintFormModule { }
