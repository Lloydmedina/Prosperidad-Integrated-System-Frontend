import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvacuationPrintListComponent } from './evacuation-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: EvacuationPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationPrintListRoutingModule { }
