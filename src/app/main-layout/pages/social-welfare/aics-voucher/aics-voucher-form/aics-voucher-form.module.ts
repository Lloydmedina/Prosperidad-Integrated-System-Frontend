import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsVoucherFormRoutingModule } from './aics-voucher-form-routing.module';
import { AicsVoucherFormComponent } from './aics-voucher-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AicsVoucherFormComponent
  ],
  imports: [
    CommonModule,
    AicsVoucherFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AicsVoucherFormModule { }
