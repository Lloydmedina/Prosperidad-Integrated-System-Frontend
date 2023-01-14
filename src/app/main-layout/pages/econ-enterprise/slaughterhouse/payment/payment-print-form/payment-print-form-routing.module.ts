import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPrintFormComponent } from './payment-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: PaymentPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentPrintFormRoutingModule { }
