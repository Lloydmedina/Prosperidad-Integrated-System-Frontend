import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakeComponent } from './aics-intake.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakeRoutingModule { }
