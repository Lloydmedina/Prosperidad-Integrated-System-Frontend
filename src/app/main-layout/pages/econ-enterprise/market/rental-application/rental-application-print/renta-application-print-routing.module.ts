import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalApplicationPrintComponent } from './rental-application-print.component';

const routes: Routes = [
  {
    path: "",
    component: RentalApplicationPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalApplicationPrintRoutingModule { }
