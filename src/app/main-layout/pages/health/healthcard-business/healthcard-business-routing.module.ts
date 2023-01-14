import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessComponent } from './healthcard-business.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessRoutingModule { }
