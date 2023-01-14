import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpPrintListComponent } from './sp-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: SpPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpPrintListRoutingModule { }
