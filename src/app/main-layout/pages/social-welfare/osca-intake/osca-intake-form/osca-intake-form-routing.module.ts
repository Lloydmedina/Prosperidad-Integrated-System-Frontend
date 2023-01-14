import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaIntakeFormComponent } from './osca-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaIntakeFormRoutingModule { }
