import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakePrintListComponent } from './aics-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakePrintListRoutingModule { }
