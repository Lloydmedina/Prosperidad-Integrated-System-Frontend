import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessFormComponent } from './healthcard-business-form.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessFormRoutingModule { }
