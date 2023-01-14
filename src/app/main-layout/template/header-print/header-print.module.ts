import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPrintComponent } from './header-print.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [
    HeaderPrintComponent
  ],
  exports: [HeaderPrintComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    NgxPrintModule
  ]
})
export class HeaderPrintModule { }
