import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildIntakePrintListComponent } from './child-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: ChildIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildIntakePrintListRoutingModule { }
