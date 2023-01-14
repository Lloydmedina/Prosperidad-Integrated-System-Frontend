import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaRegistrationPrintFormComponent } from './osca-registration-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaRegistrationPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRegistrationPrintFormRoutingModule { }
