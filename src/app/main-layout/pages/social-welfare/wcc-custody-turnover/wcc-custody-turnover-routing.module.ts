import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCustodyTurnoverComponent } from './wcc-custody-turnover.component';

const routes: Routes = [
  {
    path: '',
    component : WccCustodyTurnoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCustodyTurnoverRoutingModule { }
