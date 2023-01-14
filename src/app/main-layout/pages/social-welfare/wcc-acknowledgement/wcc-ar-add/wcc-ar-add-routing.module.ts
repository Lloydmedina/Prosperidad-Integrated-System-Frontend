import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccArAddComponent } from './wcc-ar-add.component';

const routes: Routes = [
  {
    path : "",
    component : WccArAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccArAddRoutingModule { }
