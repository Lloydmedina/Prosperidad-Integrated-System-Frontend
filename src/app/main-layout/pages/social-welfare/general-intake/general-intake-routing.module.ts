import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralIntakeComponent } from './general-intake.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralIntakeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralIntakeRoutingModule { }
