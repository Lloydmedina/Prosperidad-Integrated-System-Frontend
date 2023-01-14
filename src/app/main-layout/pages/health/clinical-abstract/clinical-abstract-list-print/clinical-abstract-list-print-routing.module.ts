import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractListPrintComponent } from './clinical-abstract-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : ClinicalAbstractListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractListPrintRoutingModule { }
