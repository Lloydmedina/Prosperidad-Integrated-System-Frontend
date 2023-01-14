import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsListComponent } from './bs-list.component';

const routes: Routes = [
  {
    path: "",
    component: BsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsListRoutingModule { }
