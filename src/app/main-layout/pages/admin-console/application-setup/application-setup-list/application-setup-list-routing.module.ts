import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationSetupListComponent } from './application-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: ApplicationSetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationSetupListRoutingModule { }
