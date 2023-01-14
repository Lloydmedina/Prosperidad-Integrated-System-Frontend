import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcciuAddComponent } from './wcciu-add.component';

const routes: Routes = [
  {
    path: "",
    component : WcciuAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcciuAddRoutingModule { }
