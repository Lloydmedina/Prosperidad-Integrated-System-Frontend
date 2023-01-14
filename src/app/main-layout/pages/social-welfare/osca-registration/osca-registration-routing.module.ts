import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaRegistrationComponent } from './osca-registration.component';

const routes: Routes = [
  {
    path: "",
    component: OscaRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRegistrationRoutingModule { }
