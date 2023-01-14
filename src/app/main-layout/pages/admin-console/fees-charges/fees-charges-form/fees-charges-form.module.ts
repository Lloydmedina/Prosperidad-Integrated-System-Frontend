import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesChargesFormComponent } from './fees-charges-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { FeesChargesFormRoutingModule } from './fees-charges-form-routing.module';
import { Routes } from '@angular/router';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    FeesChargesFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [FeesChargesFormComponent]
})
export class FeesChargesFormModule { }
