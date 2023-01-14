import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleTypeFormComponent } from './role-type-form.component';

const routes: Routes = [
  {
    path: "",
    component: RoleTypeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleTypeFormRoutingModule { }
