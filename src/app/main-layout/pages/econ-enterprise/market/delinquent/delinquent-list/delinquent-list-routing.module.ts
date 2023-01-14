import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelinquentListComponent } from './delinquent-list.component';
const routes: Routes = [
  {
    path: "",
    component: DelinquentListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelinquentListRoutingModule { }
