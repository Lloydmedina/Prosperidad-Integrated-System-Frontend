import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcciuFormPrintComponent } from './wcciu-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : WcciuFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcciuFormPrintRoutingModule { }
