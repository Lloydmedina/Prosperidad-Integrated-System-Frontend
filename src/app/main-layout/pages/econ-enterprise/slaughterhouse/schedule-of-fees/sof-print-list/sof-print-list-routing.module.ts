import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SofPrintListComponent } from './sof-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: SofPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofPrintListRoutingModule { }
