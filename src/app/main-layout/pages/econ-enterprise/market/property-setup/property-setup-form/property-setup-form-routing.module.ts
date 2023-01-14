import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySetupFormComponent } from './property-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: PropertySetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySetupFormRoutingModule { }
