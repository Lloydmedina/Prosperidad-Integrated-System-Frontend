import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacFormComponent } from './dafac-form.component';

const routes: Routes = [
  {
    path: "",
    component: DafacFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacFormRoutingModule { }
