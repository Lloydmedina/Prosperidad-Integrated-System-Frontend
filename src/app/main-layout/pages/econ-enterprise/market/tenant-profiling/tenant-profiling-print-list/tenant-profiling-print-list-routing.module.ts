import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantProfilingPrintListComponent } from './tenant-profiling-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: TenantProfilingPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfilingPrintListRoutingModule { }
