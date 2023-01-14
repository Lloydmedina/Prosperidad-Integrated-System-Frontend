import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentIntakeListComponent } from './indigent-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentIntakeListRoutingModule { }
