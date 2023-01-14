import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceAddComponent } from './wcc-case-conference-add.component';

const routes: Routes = [
  {
    path : "",
    component : WccCaseConferenceAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceAddRoutingModule { }
