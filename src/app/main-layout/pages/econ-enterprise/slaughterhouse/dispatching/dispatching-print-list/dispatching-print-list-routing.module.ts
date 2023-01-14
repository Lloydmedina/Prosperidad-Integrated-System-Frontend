import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchingPrintListComponent } from './dispatching-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DispatchingPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchingPrintListRoutingModule { }
