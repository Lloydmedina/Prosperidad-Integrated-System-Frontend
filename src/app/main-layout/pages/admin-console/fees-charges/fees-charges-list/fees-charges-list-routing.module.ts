import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesChargesListComponent } from './fees-charges-list.component';

const routes: Routes = [
  {
    path: "",
    component: FeesChargesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesChargesListRoutingModule { }
