import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSetupFormComponent } from './application-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: ApplicationSetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationSetupFormRoutingModule { }
