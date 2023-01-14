import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcciuFormComponent } from './wcciu-form.component';

const routes: Routes = [
  {
    path : "",
    component : WcciuFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcciuFormRoutingModule { }
