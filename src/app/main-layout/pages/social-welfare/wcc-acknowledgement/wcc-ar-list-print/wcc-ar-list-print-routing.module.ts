import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccArListPrintComponent } from './wcc-ar-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccArListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccArListPrintRoutingModule { }
