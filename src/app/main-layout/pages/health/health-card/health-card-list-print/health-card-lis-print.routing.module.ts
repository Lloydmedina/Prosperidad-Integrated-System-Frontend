import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCardListPrintComponent } from './health-card-list-print.component';
const routes: Routes = [
  {
path : "",
component : HealthCardListPrintComponent
  },
];
@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class HealthCardListPrintRoutingModule {};

