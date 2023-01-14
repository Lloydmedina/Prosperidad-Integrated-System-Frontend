import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilitiesSetupListComponent } from './utilities-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: UtilitiesSetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesSetupListRoutingModule { }
