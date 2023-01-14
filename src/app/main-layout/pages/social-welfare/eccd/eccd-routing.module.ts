import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EccdComponent } from './eccd.component';

const routes: Routes = [
  {
    path: "",
    component: EccdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccdRoutingModule { }
