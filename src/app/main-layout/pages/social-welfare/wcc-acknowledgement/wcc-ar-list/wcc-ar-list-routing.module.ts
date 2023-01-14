import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccArListComponent } from './wcc-ar-list.component';

const routes: Routes = [
  {
    path : "",
    component : WccArListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccArListRoutingModule { }
