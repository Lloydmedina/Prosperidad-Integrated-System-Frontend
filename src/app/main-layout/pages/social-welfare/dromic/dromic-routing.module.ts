import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DromicComponent } from './dromic.component';

const routes: Routes = [
  {
    path: "",
    component: DromicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DromicRoutingModule { }
