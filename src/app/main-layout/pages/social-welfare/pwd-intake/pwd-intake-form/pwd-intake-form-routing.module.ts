import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdIntakeFormComponent } from './pwd-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: PwdIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdIntakeFormRoutingModule { }
