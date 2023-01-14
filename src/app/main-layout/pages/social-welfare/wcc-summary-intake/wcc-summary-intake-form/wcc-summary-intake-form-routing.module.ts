import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccSummaryIntakeFormComponent } from './wcc-summary-intake-form.component';

const routes: Routes = [
  {
    path : "",
    component : WccSummaryIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccSummaryIntakeFormRoutingModule { }
