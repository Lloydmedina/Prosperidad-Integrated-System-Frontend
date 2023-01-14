import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccRegistrationFormPrintComponent } from './wcc-registration-form-print.component';

const routes: Routes = [{
  path : "",
  component : WccRegistrationFormPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccRegistrationFormPrintRoutingModule { }
