import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityListPrintComponent } from './water-potability-list-print.component';

const routes: Routes = [{
  path : "",
  component : WaterPotabilityListPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityListPrintRoutingModule { }
