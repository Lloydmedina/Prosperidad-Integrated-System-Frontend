import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacIntakePrintListComponent } from './dafac-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: DafacIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacIntakePrintListRoutingModule { }
