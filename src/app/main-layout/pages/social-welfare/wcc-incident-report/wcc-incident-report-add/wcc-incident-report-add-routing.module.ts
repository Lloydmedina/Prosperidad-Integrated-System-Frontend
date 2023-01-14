import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportAddComponent } from './wcc-incident-report-add.component';

const routes: Routes = [
  {
    path : "",
    component : WccIncidentReportAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportAddRoutingModule { }
