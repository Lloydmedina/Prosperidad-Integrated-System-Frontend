import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvacuationCenterListComponent } from './evacuation-center-list.component';

const routes: Routes = [
  {
    path: "",
    component: EvacuationCenterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationCenterListRoutingModule { }
