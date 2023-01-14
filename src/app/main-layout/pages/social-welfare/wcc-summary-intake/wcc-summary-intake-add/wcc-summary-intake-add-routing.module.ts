import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccSummaryIntakeAddComponent } from './wcc-summary-intake-add.component';

const routes: Routes = [{
  path: "",
  component : WccSummaryIntakeAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccSummaryIntakeAddRoutingModule { }
