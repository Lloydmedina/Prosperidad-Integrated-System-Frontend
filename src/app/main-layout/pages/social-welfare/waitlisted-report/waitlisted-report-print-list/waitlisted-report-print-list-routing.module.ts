import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlistedReportPrintListComponent } from './waitlisted-report-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: WaitlistedReportPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitlistedReportPrintListRoutingModule { }
