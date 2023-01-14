import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccAcknowledgementComponent } from './wcc-acknowledgement.component';

const routes: Routes = [
  {
    path: '',
    component: WccAcknowledgementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccAcknowledgementRoutingModule { }
