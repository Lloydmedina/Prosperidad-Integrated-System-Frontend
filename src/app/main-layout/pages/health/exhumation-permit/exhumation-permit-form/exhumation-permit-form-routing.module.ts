import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhumationPermitFormComponent } from './exhumation-permit-form.component';

const routes: Routes = [
  {
    path : "",
    component : ExhumationPermitFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhumationPermitFormRoutingModule { }
