import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdIntakeListComponent } from './pwd-intake-list.component';

const routes: Routes = [
  {
    path: "",
    component: PwdIntakeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdIntakeListRoutingModule { }
