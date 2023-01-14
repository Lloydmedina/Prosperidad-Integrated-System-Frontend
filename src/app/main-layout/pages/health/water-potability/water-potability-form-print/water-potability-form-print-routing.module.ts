import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityFormPrintComponent } from './water-potability-form-print.component';

const routes: Routes = [{
  path : "",
  component : WaterPotabilityFormPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityFormPrintRoutingModule { }
