import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractFormPrintComponent } from './clinical-abstract-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : ClinicalAbstractFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractFormPrintRoutingModule { }
