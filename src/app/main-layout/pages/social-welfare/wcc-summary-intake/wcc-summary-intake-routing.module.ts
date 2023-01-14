import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccSummaryIntakeComponent } from './wcc-summary-intake.component';

const routes: Routes = [
  {
    path : "",
    component : WccSummaryIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccSummaryIntakeRoutingModule { }
