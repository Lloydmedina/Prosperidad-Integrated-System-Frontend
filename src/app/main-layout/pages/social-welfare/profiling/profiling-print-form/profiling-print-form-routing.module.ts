import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilingPrintFormComponent } from './profiling-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: ProfilingPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilingPrintFormRoutingModule { }
