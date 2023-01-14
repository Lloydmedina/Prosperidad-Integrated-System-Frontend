import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DromicPrintFormComponent } from './dromic-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: DromicPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DromicPrintFormRoutingModule { }
