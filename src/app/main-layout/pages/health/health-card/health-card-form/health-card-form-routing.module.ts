import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthCardFormComponent } from './health-card-form.component';

const routes: Routes = [
  {
    path: "",
    component: HealthCardFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthCardFormRoutingModule { }
