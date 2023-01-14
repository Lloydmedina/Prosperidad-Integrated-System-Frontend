import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccRegistrationListPrintComponent } from './wcc-registration-list-print.component';

const routes: Routes = [{
  path : "",
  component : WccRegistrationListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccRegistrationListPrintRoutingModule { }
