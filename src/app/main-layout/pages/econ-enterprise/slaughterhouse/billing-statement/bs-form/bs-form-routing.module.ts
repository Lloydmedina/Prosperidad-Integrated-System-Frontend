import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsFormComponent } from './bs-form.component';

const routes: Routes = [
  {
    path: "",
    component: BsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BsFormRoutingModule { }
