import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdListComponent } from './pwd-list.component';

const routes: Routes = [
  {
    path: "",
    component: PwdListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdListRoutingModule { }
