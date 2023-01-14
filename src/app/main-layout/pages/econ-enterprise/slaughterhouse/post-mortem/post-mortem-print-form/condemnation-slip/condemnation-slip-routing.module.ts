import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondemnationSlipComponent } from './condemnation-slip.component';

const routes: Routes = [
  {
    path: "",
    component: CondemnationSlipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondemnationSlipRoutingModule { }
