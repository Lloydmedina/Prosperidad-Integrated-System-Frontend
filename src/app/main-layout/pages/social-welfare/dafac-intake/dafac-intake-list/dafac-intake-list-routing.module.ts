import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacIntakeListComponent } from './dafac-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: DafacIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacIntakeListRoutingModule { }
