import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloParentIntakeComponent } from './solo-parent-intake.component';

const routes: Routes = [
  {
    path: "",
    component: SoloParentIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoloParentIntakeRoutingModule { }
