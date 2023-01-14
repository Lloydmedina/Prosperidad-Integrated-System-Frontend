import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcciuListPrintComponent } from './wcciu-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : WcciuListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcciuListPrintRoutingModule { }
