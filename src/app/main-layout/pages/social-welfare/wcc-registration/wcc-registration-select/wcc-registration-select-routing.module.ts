import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccRegistrationSelectComponent } from './wcc-registration-select.component';

const routes: Routes = [{
  path : "",
  component : WccRegistrationSelectComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccRegistrationSelectRoutingModule { }
