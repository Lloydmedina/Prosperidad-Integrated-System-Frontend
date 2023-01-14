import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportListPrintComponent } from './wcc-incident-report-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccIncidentReportListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportListPrintRoutingModule { }
