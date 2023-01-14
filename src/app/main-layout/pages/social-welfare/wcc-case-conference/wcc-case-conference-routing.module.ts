import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceComponent } from './wcc-case-conference.component';

const routes: Routes = [
  {
    path : "",
    component : WccCaseConferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceRoutingModule { }
