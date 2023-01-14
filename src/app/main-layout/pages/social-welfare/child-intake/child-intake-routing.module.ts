import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildIntakeComponent } from './child-intake.component';

const routes: Routes = [
  {
    path: "",
    component: ChildIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildIntakeRoutingModule { }
