import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentComponent } from './indigent.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentRoutingModule { }
