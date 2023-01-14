import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchingComponent } from './dispatching.component';

const routes: Routes = [
  {
    path: "",
    component: DispatchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchingRoutingModule { }
