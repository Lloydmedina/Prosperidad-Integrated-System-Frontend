import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DromicPrintListComponent } from './dromic-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DromicPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DromicPrintListRoutingModule { }
