import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessFormNewComponent } from './healthcard-business-form-new.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessFormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessFormNewRoutingModule { }
