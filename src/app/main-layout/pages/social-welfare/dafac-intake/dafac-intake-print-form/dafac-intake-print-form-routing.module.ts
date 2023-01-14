import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacIntakePrintFormComponent } from './dafac-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: DafacIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacIntakePrintFormRoutingModule { }
