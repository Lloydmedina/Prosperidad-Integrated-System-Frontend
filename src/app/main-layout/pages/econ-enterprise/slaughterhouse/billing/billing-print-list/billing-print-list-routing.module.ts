import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPrintListComponent } from './billing-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: BillingPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingPrintListRoutingModule { }
