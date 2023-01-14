import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlistedReportFormComponent } from './waitlisted-report-form.component';

const routes: Routes = [
  {
    path: "",
    component: WaitlistedReportFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitlistedReportFormRoutingModule { }
