import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlistedReportListComponent } from './waitlisted-report-list.component';

const routes: Routes = [
  {
    path: "",
    component:  WaitlistedReportListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitlistedReportListRoutingModule { }
