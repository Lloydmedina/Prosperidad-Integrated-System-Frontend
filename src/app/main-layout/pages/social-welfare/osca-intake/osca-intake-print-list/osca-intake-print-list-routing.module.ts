import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaIntakePrintListComponent } from './osca-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaIntakePrintListRoutingModule { }
