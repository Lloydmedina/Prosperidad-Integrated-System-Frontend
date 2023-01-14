import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineeringComponent } from './engineering.component';

const routes: Routes = [
  {
    path: "",
    component: EngineeringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngineeringRoutingModule { }
