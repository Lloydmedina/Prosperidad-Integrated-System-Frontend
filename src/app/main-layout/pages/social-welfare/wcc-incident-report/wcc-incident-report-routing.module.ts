import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportComponent } from './wcc-incident-report.component';

const routes: Routes = [
  {
    path : "",
    component : WccIncidentReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportRoutingModule { }
