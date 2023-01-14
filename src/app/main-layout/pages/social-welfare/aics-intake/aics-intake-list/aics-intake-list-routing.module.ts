import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakeListComponent } from './aics-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakeListRoutingModule { }
