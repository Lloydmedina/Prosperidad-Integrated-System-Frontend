import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdPrintFormComponent } from './pwd-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: PwdPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdPrintFormRoutingModule { }
