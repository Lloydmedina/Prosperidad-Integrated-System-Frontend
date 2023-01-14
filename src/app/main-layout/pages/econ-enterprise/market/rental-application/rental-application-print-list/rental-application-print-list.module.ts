import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationPrintListComponent } from './rental-application-print-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { RentalApplicationPrintListRoutingModule } from './rental-application-print-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RentalApplicationPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [RentalApplicationPrintListComponent]
})
export class RentalApplicationPrintListModule { }
