import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacIntakeComponent } from './dafac-intake.component';

const routes: Routes = [
  {
    path: "",
    component: DafacIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacIntakeRoutingModule { }
