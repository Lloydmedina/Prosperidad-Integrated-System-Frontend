import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildIntakePrintListRoutingModule } from './child-intake-print-list-routing.module';
import { ChildIntakePrintListComponent } from './child-intake-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';


@NgModule({
  declarations: [
    ChildIntakePrintListComponent
  ],
  imports: [
    CommonModule,
    ChildIntakePrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule
  ]
})
export class ChildIntakePrintListModule { }
