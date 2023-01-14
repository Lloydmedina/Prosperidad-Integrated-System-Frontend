import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacPrintListComponent } from './dafac-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DafacPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacPrintListRoutingModule { }
