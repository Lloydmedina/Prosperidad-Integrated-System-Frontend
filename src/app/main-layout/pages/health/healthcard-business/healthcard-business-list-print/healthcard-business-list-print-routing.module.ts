import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthcardBusinessListPrintComponent } from './healthcard-business-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : HealthcardBusinessListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthcardBusinessListPrintRoutingModule { }
