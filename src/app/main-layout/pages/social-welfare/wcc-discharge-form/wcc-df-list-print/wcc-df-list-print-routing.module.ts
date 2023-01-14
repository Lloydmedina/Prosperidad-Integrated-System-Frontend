import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDfListPrintComponent } from './wcc-df-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccDfListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDfListPrintRoutingModule { }
