import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaRegistrationListComponent } from './osca-registration-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaRegistrationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRegistrationListRoutingModule { }
