import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdFormComponent } from './pwd-form.component';

const routes: Routes = [
  {
    path: "",
    component: PwdFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdFormRoutingModule { }
