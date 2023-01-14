import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCtListComponent } from './wcc-ct-list.component';

const routes: Routes = [{
  path : "",
  component : WccCtListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCtListRoutingModule { }
