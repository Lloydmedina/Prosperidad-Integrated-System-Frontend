import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalAbstractFormNewComponent } from './clinical-abstract-form-new.component';


const routes: Routes = [
  {
    path : "",
    component : ClinicalAbstractFormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalAbstractFormNewRoutingModule { }
