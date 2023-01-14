import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlistedReportPrintFormComponent } from './waitlisted-report-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: WaitlistedReportPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitlistedReportPrintFormRoutingModule { }
