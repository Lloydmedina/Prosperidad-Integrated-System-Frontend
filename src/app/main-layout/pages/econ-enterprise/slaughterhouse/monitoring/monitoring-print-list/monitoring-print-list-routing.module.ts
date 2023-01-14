import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringPrintListComponent } from './monitoring-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: MonitoringPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringPrintListRoutingModule { }
