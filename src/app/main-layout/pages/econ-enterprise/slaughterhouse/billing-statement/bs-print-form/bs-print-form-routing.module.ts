import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsPrintFormComponent } from './bs-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: BsPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsPrintFormRoutingModule { }
