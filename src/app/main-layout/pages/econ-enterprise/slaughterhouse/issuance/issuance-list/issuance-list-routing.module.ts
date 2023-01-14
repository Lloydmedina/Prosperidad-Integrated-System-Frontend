import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuanceListComponent } from './issuance-list.component';

const routes: Routes = [
  {
    path: "",
    component: IssuanceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuanceListRoutingModule { }
