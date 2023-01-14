import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesSetupFormComponent } from './utilities-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: UtilitiesSetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesSetupFormRoutingModule { }
