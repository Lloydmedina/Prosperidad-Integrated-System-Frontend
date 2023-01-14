import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaPrintFormComponent } from './osca-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaPrintFormRoutingModule { }
