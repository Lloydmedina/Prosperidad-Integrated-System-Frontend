import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDfListComponent } from './wcc-df-list.component';

const routes: Routes = [{
  path : "",
  component : WccDfListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDfListRoutingModule { }
