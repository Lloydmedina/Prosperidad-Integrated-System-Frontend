import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectedOfficialsListComponent } from './elected-officials-list.component';

const routes: Routes = [
  {
    path: "",
    component: ElectedOfficialsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectedOfficialsListRoutingModule { }
