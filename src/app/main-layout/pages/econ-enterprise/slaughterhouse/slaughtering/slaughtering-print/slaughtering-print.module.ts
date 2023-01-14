import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaughteringPrintComponent } from './slaughtering-print.component';
import { SlaughteringPrintRoutingModule } from './slaughtering-print-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    SlaughteringPrintRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ],
  declarations: [SlaughteringPrintComponent]
})
export class SlaughteringPrintModule { }
