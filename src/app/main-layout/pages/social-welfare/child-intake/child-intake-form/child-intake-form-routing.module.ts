import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildIntakeFormComponent } from './child-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: ChildIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildIntakeFormRoutingModule { }
