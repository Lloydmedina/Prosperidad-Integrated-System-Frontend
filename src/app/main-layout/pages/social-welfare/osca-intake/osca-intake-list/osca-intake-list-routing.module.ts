import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaIntakeListComponent } from './osca-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaIntakeListRoutingModule { }
