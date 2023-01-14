import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessSetupListComponent } from './business-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessSetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSetupListRoutingModule { }
