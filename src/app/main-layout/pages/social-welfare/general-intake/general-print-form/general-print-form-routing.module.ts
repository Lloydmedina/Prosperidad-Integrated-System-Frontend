import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPrintFormComponent } from './general-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralPrintFormRoutingModule { }
