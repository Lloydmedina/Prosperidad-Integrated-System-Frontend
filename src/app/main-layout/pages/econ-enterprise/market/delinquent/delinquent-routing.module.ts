import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelinquentComponent } from './delinquent.component';
const routes: Routes = [
  {
    path: "",
    component: DelinquentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelinquentRoutingModule { }
