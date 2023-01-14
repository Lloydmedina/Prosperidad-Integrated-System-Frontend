import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityComponent } from './water-potability.component';

const routes: Routes = [
  {
    path : "",
    component : WaterPotabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityRoutingModule { }
