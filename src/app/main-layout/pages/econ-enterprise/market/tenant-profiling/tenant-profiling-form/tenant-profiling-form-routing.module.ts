import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TenantProfilingFormComponent } from './tenant-profiling-form.component';

const routes: Routes = [
  {
    path: "",
    component: TenantProfilingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfilingFormRoutingModule { }
