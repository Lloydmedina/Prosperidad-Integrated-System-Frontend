import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketBillingListComponent } from './market-billing-list.component';
import { MarketBillingListRoutingModule } from './market-billing-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';

@NgModule({
  imports: [
    CommonModule,
    MarketBillingListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [MarketBillingListComponent]
})
export class MarketBillingListModule { }
