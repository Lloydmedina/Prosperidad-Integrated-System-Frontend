import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacListComponent } from './dafac-list.component';

const routes: Routes = [
  {
    path: "",
    component: DafacListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacListRoutingModule { }
