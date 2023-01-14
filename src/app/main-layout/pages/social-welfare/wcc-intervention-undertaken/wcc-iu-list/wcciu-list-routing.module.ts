import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WcciuListComponent } from './wcciu-list.component';

const routes: Routes = [
  {
    path: "",
    component : WcciuListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WcciuListRoutingModule { }
