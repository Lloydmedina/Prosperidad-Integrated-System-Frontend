import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketBillingComponent } from './market-billing.component';
const routes: Routes = [
  {
    path: "",
    component: MarketBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketBillingRoutingModule { }
