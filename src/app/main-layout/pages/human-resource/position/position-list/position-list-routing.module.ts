import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent } from './position-list.component';

const routes: Routes = [
  {
    path: "",
    component: PositionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionListRoutingModule { }
