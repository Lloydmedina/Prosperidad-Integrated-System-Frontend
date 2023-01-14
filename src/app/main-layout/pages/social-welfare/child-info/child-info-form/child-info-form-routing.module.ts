import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildInfoFormComponent } from './child-info-form.component';

const routes: Routes = [
  {
    path: "",
    component: ChildInfoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildInfoFormRoutingModule { }
