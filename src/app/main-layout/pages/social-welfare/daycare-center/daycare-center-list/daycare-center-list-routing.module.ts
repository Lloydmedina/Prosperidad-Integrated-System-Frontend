import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaycareCenterListComponent } from './daycare-center-list.component';

const routes: Routes = [
  {
    path: "",
    component: DaycareCenterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaycareCenterListRoutingModule { }
