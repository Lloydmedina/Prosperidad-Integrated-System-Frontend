import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsPrintListComponent } from './aics-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsPrintListRoutingModule { }
