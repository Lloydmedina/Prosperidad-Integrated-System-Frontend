import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpListComponent } from './sp-list.component';

const routes: Routes = [
  {
    path: "",
    component: SpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpListRoutingModule { }
