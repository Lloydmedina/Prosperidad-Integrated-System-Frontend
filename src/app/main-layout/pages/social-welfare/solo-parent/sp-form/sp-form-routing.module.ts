import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpFormComponent } from './sp-form.component';

const routes: Routes = [
  {
    path: "",
    component: SpFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpFormRoutingModule { }
