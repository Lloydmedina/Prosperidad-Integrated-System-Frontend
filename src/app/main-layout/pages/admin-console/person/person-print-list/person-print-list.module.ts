import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonPrintListRoutingModule } from './person-print-list-routing.module';
import { PersonPrintListComponent } from './person-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    PersonPrintListComponent
  ],
  imports: [
    CommonModule,
    PersonPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class PersonPrintListModule { }
