import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingFormComponent } from './billing-form.component';

const routes: Routes = [
  {
    path: "",
    component: BillingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingFormRoutingModule { }
