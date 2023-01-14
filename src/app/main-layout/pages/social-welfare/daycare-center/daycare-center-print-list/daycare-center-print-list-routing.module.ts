import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaycareCenterPrintListComponent } from './daycare-center-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DaycareCenterPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaycareCenterPrintListRoutingModule { }
