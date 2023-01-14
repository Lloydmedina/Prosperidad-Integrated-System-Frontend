import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrFormComponent } from './sr-form.component';

const routes: Routes = [
  {
    path: "",
    component: SrFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrFormRoutingModule { }
