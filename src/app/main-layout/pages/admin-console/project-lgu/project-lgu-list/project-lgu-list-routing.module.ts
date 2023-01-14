import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLguListComponent } from './project-lgu-list.component';
const routes: Routes = [
  {
    path: "",
    component: ProjectLguListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectLguListRoutingModule { }
