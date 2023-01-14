import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakePrintFormComponent } from './aics-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakePrintFormRoutingModule { }
