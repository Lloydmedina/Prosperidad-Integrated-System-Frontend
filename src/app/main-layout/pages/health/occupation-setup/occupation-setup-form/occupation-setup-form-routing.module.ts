import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupationSetupFormComponent } from './occupation-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: OccupationSetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationSetupFormRoutingModule { }
