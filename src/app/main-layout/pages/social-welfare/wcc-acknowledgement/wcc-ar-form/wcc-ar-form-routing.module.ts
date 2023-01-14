import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccArFormComponent } from './wcc-ar-form.component';

const routes: Routes = [{
  path : "",
  component : WccArFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccArFormRoutingModule { }
