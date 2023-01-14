import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhumationPermitListPrintComponent } from './exhumation-permit-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : ExhumationPermitListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhumationPermitListPrintRoutingModule { }
