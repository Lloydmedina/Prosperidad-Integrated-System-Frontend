import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccRegistrationComponent } from './wcc-registration.component';

const routes: Routes = [
  {
    path : "",
    component : WccRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccRegistrationRoutingModule { }
