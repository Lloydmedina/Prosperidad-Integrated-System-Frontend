import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccdPrintFormRoutingModule } from './eccd-print-form-routing.module';
import { EccdPrintFormComponent } from './eccd-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    EccdPrintFormComponent
  ],
  imports: [
    CommonModule,
    EccdPrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EccdPrintFormModule { }
