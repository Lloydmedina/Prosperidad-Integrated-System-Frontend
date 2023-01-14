import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccSummaryIntakeListPrintComponent } from './wcc-summary-intake-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : WccSummaryIntakeListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccSummaryIntakeListPrintRoutingModule { }
