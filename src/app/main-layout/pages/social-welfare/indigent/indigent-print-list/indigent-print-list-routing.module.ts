import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentPrintListComponent } from './indigent-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentPrintListRoutingModule { }
