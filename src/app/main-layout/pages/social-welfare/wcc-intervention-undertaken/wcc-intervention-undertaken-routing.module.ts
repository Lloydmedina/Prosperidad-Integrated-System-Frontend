import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccInterventionUndertakenComponent } from './wcc-intervention-undertaken.component';

const routes: Routes = [
  {
    path: "",
    component : WccInterventionUndertakenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccInterventionUndertakenRoutingModule { }
