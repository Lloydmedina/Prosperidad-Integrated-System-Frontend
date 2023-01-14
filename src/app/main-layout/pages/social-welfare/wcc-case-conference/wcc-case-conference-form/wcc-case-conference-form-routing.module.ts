import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceFormComponent } from './wcc-case-conference-form.component';

const routes: Routes = [
  {
    path : "",
    component : WccCaseConferenceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceFormRoutingModule { }
