import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionFormComponent } from './position-form.component';

const routes: Routes = [
  {
    path: "",
    component: PositionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionFormRoutingModule { }
