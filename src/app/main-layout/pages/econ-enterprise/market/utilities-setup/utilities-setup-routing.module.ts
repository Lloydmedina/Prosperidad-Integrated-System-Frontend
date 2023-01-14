import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesSetupComponent } from './utilities-setup.component';

const routes: Routes = [
  {
    path: "",
    component: UtilitiesSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesSetupRoutingModule { }
