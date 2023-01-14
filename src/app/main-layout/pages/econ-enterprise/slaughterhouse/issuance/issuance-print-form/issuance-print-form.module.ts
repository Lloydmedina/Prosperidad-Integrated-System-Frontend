import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssuancePrintFormRoutingModule } from './issuance-print-form-routing.module';
import { IssuancePrintFormComponent } from './issuance-print-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    IssuancePrintFormComponent
  ],
  imports: [
    CommonModule,
    IssuancePrintFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class IssuancePrintFormModule { }
