import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilingListComponent } from './profiling-list.component';

const routes: Routes = [
  {
    path: "",
    component: ProfilingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilingListRoutingModule { }
