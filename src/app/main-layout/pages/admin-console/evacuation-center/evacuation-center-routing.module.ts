import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvacuationCenterComponent } from './evacuation-center.component';

const routes: Routes = [
  {
    path: "",
    component: EvacuationCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationCenterRoutingModule { }
