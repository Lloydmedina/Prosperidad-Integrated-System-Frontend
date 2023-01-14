import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDfAddComponent } from './wcc-df-add.component';

const routes: Routes = [
  {
    path : "",
    component : WccDfAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDfAddRoutingModule { }
