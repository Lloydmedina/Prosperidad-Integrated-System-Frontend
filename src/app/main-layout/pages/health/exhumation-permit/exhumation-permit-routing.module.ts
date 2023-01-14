import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhumationPermitComponent } from './exhumation-permit.component';

const routes: Routes = [
  {
    path : "",
    component : ExhumationPermitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhumationPermitRoutingModule { }
