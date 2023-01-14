import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssuancePrintFormComponent } from './issuance-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: IssuancePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuancePrintFormRoutingModule { }
