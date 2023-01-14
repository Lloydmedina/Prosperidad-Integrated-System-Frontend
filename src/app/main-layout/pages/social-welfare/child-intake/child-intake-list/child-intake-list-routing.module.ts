import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildIntakeListComponent } from './child-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: ChildIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildIntakeListRoutingModule { }
