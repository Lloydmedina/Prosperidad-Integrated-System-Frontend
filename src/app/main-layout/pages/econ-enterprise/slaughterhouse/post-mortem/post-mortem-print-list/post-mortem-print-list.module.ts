import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMortemPrintListRoutingModule } from './post-mortem-print-list-routing.module';
import { PostMortemPrintListComponent } from './post-mortem-print-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FooterPrintModule } from 'src/app/main-layout/template/footer-print/footer-print.module';
import { HeaderPrintModule } from 'src/app/main-layout/template/header-print/header-print.module';
import { NgxPrintModule } from 'ngx-print';


@NgModule({
  declarations: [
    PostMortemPrintListComponent
  ],
  imports: [
    CommonModule,
    PostMortemPrintListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HeaderPrintModule,
    FooterPrintModule,
    NgxPrintModule
  ]
})
export class PostMortemPrintListModule { }
