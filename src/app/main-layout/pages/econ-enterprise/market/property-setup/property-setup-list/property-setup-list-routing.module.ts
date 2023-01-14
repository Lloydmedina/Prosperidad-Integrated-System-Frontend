import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySetupListComponent } from './property-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: PropertySetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySetupListRoutingModule { }
