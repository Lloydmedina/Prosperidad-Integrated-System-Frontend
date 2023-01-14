import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuanceFormComponent } from './issuance-form.component';

const routes: Routes = [
  {
    path: "",
    component: IssuanceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuanceFormRoutingModule { }
