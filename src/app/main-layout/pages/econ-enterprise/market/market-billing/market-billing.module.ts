import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketBillingComponent } from './market-billing.component';
import { MarketBillingRoutingModule } from './market-billing-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    MarketBillingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [MarketBillingComponent]
})
export class MarketBillingModule { }
