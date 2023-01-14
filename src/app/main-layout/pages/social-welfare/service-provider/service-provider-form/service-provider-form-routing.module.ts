import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderFormComponent } from './service-provider-form.component';

const routes: Routes = [
  {
    path: "",
    component: ServiceProviderFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderFormRoutingModule { }
