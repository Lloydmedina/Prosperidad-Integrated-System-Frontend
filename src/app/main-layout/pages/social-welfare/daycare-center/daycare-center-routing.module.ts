import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaycareCenterComponent } from './daycare-center.component';

const routes: Routes = [
  {
    path: "",
    component: DaycareCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaycareCenterRoutingModule { }
