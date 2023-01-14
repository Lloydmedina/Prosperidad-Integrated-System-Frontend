import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDfFormComponent } from './wcc-df-form.component';

const routes: Routes = [
  {
    path:"",
    component : WccDfFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDfFormRoutingModule { }
