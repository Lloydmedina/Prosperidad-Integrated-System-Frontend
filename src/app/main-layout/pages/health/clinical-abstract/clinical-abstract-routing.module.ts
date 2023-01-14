import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractComponent } from './clinical-abstract.component';

const routes: Routes = [
  {
    path: "",
    component: ClinicalAbstractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractRoutingModule { }
