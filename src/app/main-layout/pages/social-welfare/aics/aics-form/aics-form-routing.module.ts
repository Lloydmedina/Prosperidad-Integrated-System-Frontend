import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsFormComponent } from './aics-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsFormRoutingModule { }
