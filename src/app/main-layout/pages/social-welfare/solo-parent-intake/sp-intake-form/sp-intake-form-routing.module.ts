import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpIntakeFormComponent } from './sp-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: SpIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpIntakeFormRoutingModule { }
