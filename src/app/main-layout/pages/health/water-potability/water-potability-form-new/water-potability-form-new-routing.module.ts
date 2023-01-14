import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WaterPotabilityFormNewComponent } from './water-potability-form-new.component';

const routes: Routes = [{
  path : "",
  component : WaterPotabilityFormNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaterPotabilityFormNewRoutingModule { }
