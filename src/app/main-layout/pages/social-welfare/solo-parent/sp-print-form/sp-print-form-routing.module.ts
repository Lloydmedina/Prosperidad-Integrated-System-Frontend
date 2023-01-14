import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpPrintFormComponent } from './sp-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: SpPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpPrintFormRoutingModule { }
