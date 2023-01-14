import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCtFormComponent } from './wcc-ct-form.component';

const routes: Routes = [
  {
    path : "",
    component : WccCtFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCtFormRoutingModule { }
