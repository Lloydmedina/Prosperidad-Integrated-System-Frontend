import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccdPrintFormComponent } from './eccd-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: EccdPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccdPrintFormRoutingModule { }
