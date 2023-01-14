import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsPrintListComponent } from './bs-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: BsPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsPrintListRoutingModule { }
