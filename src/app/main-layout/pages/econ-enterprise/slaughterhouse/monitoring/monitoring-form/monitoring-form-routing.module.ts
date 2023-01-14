import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitoringFormComponent } from './monitoring-form.component';

const routes: Routes = [
  {
    path: "",
    component: MonitoringFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitoringFormRoutingModule { }
