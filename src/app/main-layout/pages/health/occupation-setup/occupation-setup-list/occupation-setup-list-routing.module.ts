import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupationSetupListComponent } from './occupation-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: OccupationSetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccupationSetupListRoutingModule { }
