import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalApplicationFormComponent } from './rental-application-form.component';

const routes: Routes = [
  {
    path: "",
    component: RentalApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalApplicationFormRoutingModule { }
