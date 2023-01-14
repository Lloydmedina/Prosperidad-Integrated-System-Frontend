import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DromicListComponent } from './dromic-list.component';

const routes: Routes = [
  {
    path: "",
    component: DromicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DromicListRoutingModule { }
