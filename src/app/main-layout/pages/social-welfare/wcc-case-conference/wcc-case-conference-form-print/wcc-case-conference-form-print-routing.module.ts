import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceFormPrintComponent } from './wcc-case-conference-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : WccCaseConferenceFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceFormPrintRoutingModule { }
