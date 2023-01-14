import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaPrintListComponent } from './osca-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaPrintListRoutingModule { }
