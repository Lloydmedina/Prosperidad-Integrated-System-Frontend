import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsPrintFormComponent } from './aics-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsPrintFormRoutingModule { }
