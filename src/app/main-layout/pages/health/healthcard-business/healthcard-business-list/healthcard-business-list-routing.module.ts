import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessListComponent } from './healthcard-business-list.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessListRoutingModule { }
