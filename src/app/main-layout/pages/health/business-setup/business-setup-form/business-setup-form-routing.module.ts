import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessSetupFormComponent } from './business-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessSetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSetupFormRoutingModule { }
