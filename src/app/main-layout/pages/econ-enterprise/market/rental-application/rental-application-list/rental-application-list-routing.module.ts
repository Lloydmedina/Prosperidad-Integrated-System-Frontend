import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalApplicationListComponent } from './rental-application-list.component';

const routes: Routes = [
  {
    path: "",
    component: RentalApplicationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalApplicationListRoutingModule { }
