import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnteMortemPrintFormRoutingModule } from './ante-mortem-print-form-routing.module';
import { AnteMortemPrintFormComponent } from './ante-mortem-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AnteMortemPrintFormComponent
  ],
  imports: [
    CommonModule,
    AnteMortemPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AnteMortemPrintFormModule { }
