import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilingFormComponent } from './profiling-form.component';

const routes: Routes = [
  {
    path: "",
    component: ProfilingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilingFormRoutingModule { }
