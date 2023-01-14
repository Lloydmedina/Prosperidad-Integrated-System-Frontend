import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantProfilingComponent } from './tenant-profiling.component';

const routes: Routes = [
  {
    path: "",
    component: TenantProfilingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantProfilingRoutingModule { }
