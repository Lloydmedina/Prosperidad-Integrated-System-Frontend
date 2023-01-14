import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterPrintComponent } from './footer-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    FooterPrintComponent
  ],
  exports: [FooterPrintComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    NgxPrintModule
  ]
})
export class FooterPrintModule { }
