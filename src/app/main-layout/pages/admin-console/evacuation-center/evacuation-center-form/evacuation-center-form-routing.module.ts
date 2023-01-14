import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvacuationCenterFormComponent } from './evacuation-center-form.component';

const routes: Routes = [
  {
    path: "",
    component: EvacuationCenterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvacuationCenterFormRoutingModule { }
