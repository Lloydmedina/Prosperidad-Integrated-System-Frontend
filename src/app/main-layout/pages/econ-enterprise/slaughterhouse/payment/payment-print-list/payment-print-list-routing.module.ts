import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPrintListComponent } from './payment-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: PaymentPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentPrintListRoutingModule { }
