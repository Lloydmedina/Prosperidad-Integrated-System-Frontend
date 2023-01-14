import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsListComponent } from './aics-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsListRoutingModule { }
