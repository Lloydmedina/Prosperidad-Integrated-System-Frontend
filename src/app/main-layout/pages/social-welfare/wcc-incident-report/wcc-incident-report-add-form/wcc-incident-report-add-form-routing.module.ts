import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccIncidentReportAddFormComponent } from './wcc-incident-report-add-form.component';

const routes: Routes = [
  {
    path : "",
    component : WccIncidentReportAddFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccIncidentReportAddFormRoutingModule { }
