import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityListComponent } from './water-potability-list.component';

const routes: Routes = [{
  path : "",
  component : WaterPotabilityListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityListRoutingModule { }
