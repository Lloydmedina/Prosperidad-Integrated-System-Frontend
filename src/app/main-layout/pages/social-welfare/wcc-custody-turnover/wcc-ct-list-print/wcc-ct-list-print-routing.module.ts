import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCtListPrintComponent } from './wcc-ct-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccCtListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCtListPrintRoutingModule { }
