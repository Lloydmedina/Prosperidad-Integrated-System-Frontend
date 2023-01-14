import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketBillingListComponent } from './market-billing-list.component';

const routes: Routes = [
  {
    path: "",
    component: MarketBillingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  MarketBillingListRoutingModule { }
