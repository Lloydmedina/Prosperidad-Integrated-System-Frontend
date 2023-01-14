import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessFormPrintComponent } from './healthcard-business-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessFormPrintRoutingModule { }
