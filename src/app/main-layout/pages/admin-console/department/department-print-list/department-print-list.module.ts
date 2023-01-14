import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentPrintListComponent } from './department-print-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DepartmentPrintListRoutingModule } from './department-print-list-routing.module';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';

@NgModule({
  imports: [
    CommonModule,
    DepartmentPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [DepartmentPrintListComponent]
})
export class DepartmentPrintListModule { }
