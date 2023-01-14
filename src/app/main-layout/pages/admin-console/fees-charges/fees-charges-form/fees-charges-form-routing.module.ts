import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesChargesFormComponent } from './fees-charges-form.component';

const routes: Routes = [
  {
    path: "",
    component: FeesChargesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesChargesFormRoutingModule { }
