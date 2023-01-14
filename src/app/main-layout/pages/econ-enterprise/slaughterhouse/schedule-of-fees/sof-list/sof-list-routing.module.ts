import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SofListComponent } from './sof-list.component';

const routes: Routes = [
  {
    path: "",
    component: SofListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofListRoutingModule { }
