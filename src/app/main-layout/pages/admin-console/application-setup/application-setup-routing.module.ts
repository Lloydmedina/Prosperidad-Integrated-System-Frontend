import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSetupComponent } from './application-setup.component';

const routes: Routes = [
  {
    path: "",
    component: ApplicationSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationSetupRoutingModule { }
