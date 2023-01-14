import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccRegistrationListComponent } from './wcc-registration-list.component';

const routes: Routes = [{
  path : "",
  component : WccRegistrationListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccRegistrationListRoutingModule { }
