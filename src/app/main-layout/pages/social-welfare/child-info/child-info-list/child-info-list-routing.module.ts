import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildInfoListComponent } from './child-info-list.component';

const routes: Routes = [
  {
    path: "",
    component: ChildInfoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildInfoListRoutingModule { }
