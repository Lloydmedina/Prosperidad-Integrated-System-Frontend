import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacPrintFormComponent } from './dafac-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: DafacPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacPrintFormRoutingModule { }
