import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpIntakePrintFormComponent } from './sp-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: SpIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpIntakePrintFormRoutingModule { }
