import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdIntakeComponent } from './pwd-intake.component';

const routes: Routes = [
  {
    path: "",
    component: PwdIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdIntakeRoutingModule { }
