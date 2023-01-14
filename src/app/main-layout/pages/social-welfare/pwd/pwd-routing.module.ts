import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdComponent } from './pwd.component';

const routes: Routes = [
  {
    path: "",
    component: PwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdRoutingModule { }
