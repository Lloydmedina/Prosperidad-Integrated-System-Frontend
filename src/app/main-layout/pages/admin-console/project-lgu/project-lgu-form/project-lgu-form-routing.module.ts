import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLguFormComponent } from './project-lgu-form.component';
const routes: Routes = [
  {
    path: "",
    component: ProjectLguFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectLguFormRoutingModule { }
