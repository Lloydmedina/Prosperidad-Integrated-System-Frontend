import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceListPrintComponent } from './wcc-case-conference-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccCaseConferenceListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceListPrintRoutingModule { }
