import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationPrintComponent } from './rental-application-print.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { RentalApplicationPrintRoutingModule } from './renta-application-print-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RentalApplicationPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [RentalApplicationPrintComponent]
})
export class RentalApplicationPrintModule { }
