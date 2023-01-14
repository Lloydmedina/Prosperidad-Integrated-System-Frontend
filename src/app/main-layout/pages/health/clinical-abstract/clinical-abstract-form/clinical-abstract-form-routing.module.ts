import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractFormComponent } from './clinical-abstract-form.component';

const routes: Routes = [
  {
    path: "",
    component: ClinicalAbstractFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractFormRoutingModule { }
