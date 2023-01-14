import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EconEnterpriseComponent } from './econ-enterprise.component';

const routes: Routes = [
  {
    path: "",
    component: EconEnterpriseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconEnterpriseRoutingModule { }
