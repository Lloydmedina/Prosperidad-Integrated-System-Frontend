import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchingFormComponent } from './dispatching-form.component';

const routes: Routes = [
  {
    path: "",
    component: DispatchingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchingFormRoutingModule { }
