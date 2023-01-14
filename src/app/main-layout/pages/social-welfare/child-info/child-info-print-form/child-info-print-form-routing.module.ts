import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildInfoPrintFormComponent } from './child-info-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: ChildInfoPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildInfoPrintFormRoutingModule { }
