import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringPrintFormComponent } from './monitoring-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: MonitoringPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringPrintFormRoutingModule { }
