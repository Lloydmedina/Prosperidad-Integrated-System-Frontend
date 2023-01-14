import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccdListComponent } from './eccd-list.component';

const routes: Routes = [
  {
    path: "",
    component: EccdListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccdListRoutingModule { }
