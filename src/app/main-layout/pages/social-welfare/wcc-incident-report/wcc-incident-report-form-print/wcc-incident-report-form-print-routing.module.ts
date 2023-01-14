import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportFormPrintComponent } from './wcc-incident-report-form-print.component';

const routes: Routes = [{
  path : "",
  component : WccIncidentReportFormPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportFormPrintRoutingModule { }
