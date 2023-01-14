import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaycareCenterFormComponent } from './daycare-center-form.component';

const routes: Routes = [
  {
    path: "",
    component: DaycareCenterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaycareCenterFormRoutingModule { }
