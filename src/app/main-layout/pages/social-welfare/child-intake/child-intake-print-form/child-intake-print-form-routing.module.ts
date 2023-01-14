import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildIntakePrintFormComponent } from './child-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: ChildIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildIntakePrintFormRoutingModule { }
