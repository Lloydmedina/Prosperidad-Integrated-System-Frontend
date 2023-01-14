import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProviderPrintListComponent } from './service-provider-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: ServiceProviderPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderPrintListRoutingModule { }
