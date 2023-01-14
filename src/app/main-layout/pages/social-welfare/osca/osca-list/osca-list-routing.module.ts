import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaListComponent } from './osca-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaListRoutingModule { }
