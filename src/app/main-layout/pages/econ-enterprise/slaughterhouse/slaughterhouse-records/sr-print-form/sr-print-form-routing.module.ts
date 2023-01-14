import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrPrintFormComponent } from './sr-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: SrPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrPrintFormRoutingModule { }
