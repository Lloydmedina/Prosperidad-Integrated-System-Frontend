import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCardListComponent } from './health-card-list.component';

const routes: Routes = [
  {
    path: "",
    component: HealthCardListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCardListRoutingModule { }
