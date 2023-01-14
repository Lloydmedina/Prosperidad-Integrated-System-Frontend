import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AicsVoucherRoutingModule } from './aics-voucher-routing.module';
import { AicsVoucherComponent } from './aics-voucher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';


@NgModule({
  declarations: [
    AicsVoucherComponent
  ],
  imports: [
    CommonModule,
    AicsVoucherRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ]
})
export class AicsVoucherModule { }
