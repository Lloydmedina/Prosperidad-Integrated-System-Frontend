import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdIntakePrintFormComponent } from './pwd-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: PwdIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdIntakePrintFormRoutingModule { }
