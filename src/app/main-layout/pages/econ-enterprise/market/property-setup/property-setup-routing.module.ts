import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySetupComponent } from './property-setup.component';

const routes: Routes = [
  {
    path: "",
    component: PropertySetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySetupRoutingModule { }
