import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScFilterComponent } from './sc-filter.component';

const routes: Routes = [
  {
    path: "",
    component: ScFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScFilterRoutingModule { }
