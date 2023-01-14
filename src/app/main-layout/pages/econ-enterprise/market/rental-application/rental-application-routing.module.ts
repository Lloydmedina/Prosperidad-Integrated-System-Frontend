import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalApplicationComponent } from './rental-application.component';

const routes: Routes = [
  {
    path: "",
    component: RentalApplicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalApplicationRoutingModule { }
