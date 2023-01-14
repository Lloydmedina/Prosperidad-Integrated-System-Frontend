import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractListComponent } from './clinical-abstract-list.component';

const routes: Routes = [
  {
    path: "",
    component: ClinicalAbstractListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractListRoutingModule { }
