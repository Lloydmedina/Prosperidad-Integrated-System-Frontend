import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalApplicationPrintListComponent } from './rental-application-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: RentalApplicationPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalApplicationPrintListRoutingModule { }
