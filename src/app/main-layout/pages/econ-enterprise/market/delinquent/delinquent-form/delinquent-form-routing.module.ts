import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelinquentFormComponent } from './delinquent-form.component';
const routes: Routes = [
  {
    path: "",
    component: DelinquentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelinquentFormRoutingModule { }
