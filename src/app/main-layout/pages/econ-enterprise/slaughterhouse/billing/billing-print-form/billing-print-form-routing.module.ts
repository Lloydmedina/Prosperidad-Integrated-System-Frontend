import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingPrintFormComponent } from './billing-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: BillingPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingPrintFormRoutingModule { }
