import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySetupPrintComponent } from './property-setup-print.component';

const routes: Routes = [
  {
    path: "",
    component: PropertySetupPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySetupPrintRoutingModule { }
