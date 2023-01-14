import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchingPrintFormComponent } from './dispatching-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: DispatchingPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchingPrintFormRoutingModule { }
