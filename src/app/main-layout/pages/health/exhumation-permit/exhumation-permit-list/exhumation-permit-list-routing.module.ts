import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhumationPermitListComponent } from './exhumation-permit-list.component';

const routes: Routes = [
  {
    path: "",
    component : ExhumationPermitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhumationPermitListRoutingModule { }
