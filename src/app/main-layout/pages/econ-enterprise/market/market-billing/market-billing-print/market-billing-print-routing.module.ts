import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketBillingPrintComponent } from './market-billing-print.component';

const routes: Routes = [
  {
    path: "",
    component: MarketBillingPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketBillingPrintRoutingModule { }
