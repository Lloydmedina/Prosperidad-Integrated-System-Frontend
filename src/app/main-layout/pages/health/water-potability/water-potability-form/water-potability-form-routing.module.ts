import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityFormComponent } from './water-potability-form.component';

const routes: Routes = [{
  path : "",
  component : WaterPotabilityFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityFormRoutingModule { }
