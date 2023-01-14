import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketBillingFormRoutingModule } from './market-billing-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { MarketBillingFormComponent } from './market-billing-form.component';

@NgModule({
  imports: [
    CommonModule,
    MarketBillingFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    MatCurrencyFormatModule
  ],
  declarations: [MarketBillingFormComponent]
})
export class MarketBillingFormModule { }
