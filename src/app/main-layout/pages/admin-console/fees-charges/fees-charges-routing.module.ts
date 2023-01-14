import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesChargesComponent } from './fees-charges.component';

const routes: Routes = [
  {
    path: "",
    component: FeesChargesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesChargesRoutingModule { }
