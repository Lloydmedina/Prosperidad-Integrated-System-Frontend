import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccdPrintListComponent } from './eccd-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: EccdPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccdPrintListRoutingModule { }
