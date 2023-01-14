import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccSummaryIntakeFormPrintComponent } from './wcc-summary-intake-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : WccSummaryIntakeFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccSummaryIntakeFormPrintRoutingModule { }
