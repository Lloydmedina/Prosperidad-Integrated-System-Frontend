import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaRegistrationFormComponent } from './osca-registration-form.component';

const routes: Routes = [
  {
    path: "",
    component: OscaRegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRegistrationFormRoutingModule { }
