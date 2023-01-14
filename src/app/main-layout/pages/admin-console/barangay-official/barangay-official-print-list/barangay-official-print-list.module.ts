import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarangayOfficialPrintListComponent } from './barangay-official-print-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BarangayOfficialPrintListRoutingModule } from './barangay-official-print-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BarangayOfficialPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [BarangayOfficialPrintListComponent]
})
export class BarangayOfficialPrintListModule { }
