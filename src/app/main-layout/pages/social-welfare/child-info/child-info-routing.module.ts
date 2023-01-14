import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildInfoComponent } from './child-info.component';

const routes: Routes = [
  {
    path: "",
    component: ChildInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildInfoRoutingModule { }
