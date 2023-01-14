import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCardPrintComponent } from './health-card-print.component';

const routes: Routes = [
  {
    path: "",
    component: HealthCardPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCardPrintRoutingModule { }
