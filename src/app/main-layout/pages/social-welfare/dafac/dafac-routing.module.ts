import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacComponent } from './dafac.component';

const routes: Routes = [
  {
    path: "",
    component: DafacComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacRoutingModule { }
