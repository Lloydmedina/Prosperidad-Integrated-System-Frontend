import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SofPrintFormComponent } from './sof-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: SofPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofPrintFormRoutingModule { }
