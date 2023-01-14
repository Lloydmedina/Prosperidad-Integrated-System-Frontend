import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhumationPermitFormPrintComponent } from './exhumation-permit-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : ExhumationPermitFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhumationPermitFormPrintRoutingModule { }
