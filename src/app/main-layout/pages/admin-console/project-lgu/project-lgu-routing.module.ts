import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLguComponent } from './project-lgu.component';
const routes: Routes = [
  {
    path: "",
    component: ProjectLguComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectLguRoutingModule { }
