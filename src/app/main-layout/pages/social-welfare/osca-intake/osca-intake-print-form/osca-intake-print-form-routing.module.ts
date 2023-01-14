import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaIntakeFormComponent } from '../osca-intake-form/osca-intake-form.component';
import { OscaIntakePrintFormComponent } from './osca-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaIntakePrintFormRoutingModule { }
