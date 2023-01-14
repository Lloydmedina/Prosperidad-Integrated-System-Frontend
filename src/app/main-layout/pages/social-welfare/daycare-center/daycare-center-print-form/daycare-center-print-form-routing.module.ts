import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaycareCenterPrintFormComponent } from './daycare-center-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: DaycareCenterPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaycareCenterPrintFormRoutingModule { }
