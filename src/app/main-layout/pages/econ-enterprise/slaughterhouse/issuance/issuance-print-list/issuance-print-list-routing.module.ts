import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuancePrintListComponent } from './issuance-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: IssuancePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuancePrintListRoutingModule { }
