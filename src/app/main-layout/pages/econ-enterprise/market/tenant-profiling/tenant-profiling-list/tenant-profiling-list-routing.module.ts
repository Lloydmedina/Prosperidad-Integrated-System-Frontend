import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TenantProfilingListComponent } from './tenant-profiling-list.component';

const routes: Routes = [
  {
    path: "",
    component: TenantProfilingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfilingListRoutingModule { }
