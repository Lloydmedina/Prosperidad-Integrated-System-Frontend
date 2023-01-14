import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentListComponent } from './indigent-list.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentListRoutingModule { }
