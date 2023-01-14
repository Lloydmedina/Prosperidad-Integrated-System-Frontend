import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaRegistrationPrintListComponent } from './osca-registration-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaRegistrationPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRegistrationPrintListRoutingModule { }
