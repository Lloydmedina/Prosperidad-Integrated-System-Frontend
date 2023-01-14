import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessSetupComponent } from './business-setup.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSetupRoutingModule { }
