import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentPrintListComponent } from './department-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DepartmentPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentPrintListRoutingModule { }
