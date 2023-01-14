import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentPrintFormComponent } from './indigent-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentPrintFormRoutingModule { }
