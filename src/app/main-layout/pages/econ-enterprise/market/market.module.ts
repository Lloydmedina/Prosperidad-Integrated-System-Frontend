import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonFilterModule } from '../../../template/person-filter/person-filter.module';
import { MarketRoutingModule } from './market-routing.module';
import { PropertySetupModule } from './property-setup/property-setup.module';
import { TenantProfilingModule } from './tenant-profiling/tenant-profiling.module';
import { UtilitiesSetupModule } from './utilities-setup/utilities-setup.module';
import { MarketBillingModule } from './market-billing/market-billing.module';
import { RentalApplicationModule } from './rental-application/rental-application.module';
import { DelinquentModule } from './delinquent/delinquent.module';

@NgModule({
  imports: [
    CommonModule,
    MarketRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PropertySetupModule,
    TenantProfilingModule,
    UtilitiesSetupModule,
    MarketBillingModule,
    RentalApplicationModule,
    DelinquentModule
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
