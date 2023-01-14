import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaitlistedReportComponent } from './waitlisted-report.component';

const routes: Routes = [
  {
    path: "",
    component: WaitlistedReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaitlistedReportRoutingModule { }
