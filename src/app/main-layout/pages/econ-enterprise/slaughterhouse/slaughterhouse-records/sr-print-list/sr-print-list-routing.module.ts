import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrPrintListComponent } from './sr-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: SrPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrPrintListRoutingModule { }
