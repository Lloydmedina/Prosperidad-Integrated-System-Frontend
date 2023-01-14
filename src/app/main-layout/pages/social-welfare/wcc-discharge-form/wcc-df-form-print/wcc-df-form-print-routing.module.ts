import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDfFormPrintComponent } from './wcc-df-form-print.component';

const routes: Routes = [
  {
    path: "",
    component : WccDfFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDfFormPrintRoutingModule { }
