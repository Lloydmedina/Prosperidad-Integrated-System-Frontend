import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportListComponent } from './wcc-incident-report-list.component';

const routes: Routes = [
  {
    path : "",
    component : WccIncidentReportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportListRoutingModule { }
