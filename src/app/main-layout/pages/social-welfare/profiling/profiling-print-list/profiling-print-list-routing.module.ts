import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilingPrintListComponent } from './profiling-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: ProfilingPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilingPrintListRoutingModule { }
