import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCaseConferenceListComponent } from './wcc-case-conference-list.component';

const routes: Routes = [
  {
    path : "",
    component : WccCaseConferenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCaseConferenceListRoutingModule { }
