import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildInfoPrintListComponent } from './child-info-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: ChildInfoPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildInfoPrintListRoutingModule { }
