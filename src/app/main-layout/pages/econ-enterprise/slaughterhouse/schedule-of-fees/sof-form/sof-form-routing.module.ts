import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SofFormComponent } from './sof-form.component';

const routes: Routes = [
  {
    path: "",
    component: SofFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SofFormRoutingModule { }
