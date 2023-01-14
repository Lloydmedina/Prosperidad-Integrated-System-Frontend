import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispatchingListComponent } from './dispatching-list.component';

const routes: Routes = [
  {
    path: "",
    component: DispatchingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchingListRoutingModule { }
