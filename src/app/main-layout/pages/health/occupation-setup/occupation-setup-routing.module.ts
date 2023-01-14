import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupationSetupComponent } from './occupation-setup.component';

const routes: Routes = [
  {
    path: "",
    component: OccupationSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationSetupRoutingModule { }
