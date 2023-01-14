import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaFormComponent } from './osca-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaFormRoutingModule { }
